import { useEffect, useRef } from "react";
import {
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
} from "react-icons/si";
import { renderToStaticMarkup } from "react-dom/server";

const ICON_DEFS = [
  { Icon: FaReact, color: "#61DAFB", label: "React" },
  { Icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind" },
  { Icon: SiJavascript, color: "#F7DF1E", label: "JS" },
  { Icon: SiFirebase, color: "#FFCA28", label: "Firebase" },
  { Icon: FaGithub, color: "#aaaaaa", label: "GitHub" },
  { Icon: FaHtml5, color: "#E34F26", label: "HTML5" },
  { Icon: FaCss3Alt, color: "#1572B6", label: "CSS3" },
  { Icon: FaGitAlt, color: "#F05032", label: "Git" },
  { Icon: SiRedux, color: "#764ABC", label: "Redux" },
];

const BOX = 56; // icon box size in px
const SPEED_MIN = 1.2;
const SPEED_MAX = 2.4;

function makeIconImage(Icon, color, size = 32) {
  const svg = renderToStaticMarkup(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <Icon x="0" y="0" width={size} height={size} fill={color} />
    </svg>,
  );
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  return new Promise((res) => {
    const img = new Image();
    img.onload = () => res(img);
    img.src = url;
  });
}

export default function SkillsCloud() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const DPR = window.devicePixelRatio || 1;

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    ctx.scale(DPR, DPR);

    const half = BOX / 2;

    const balls = ICON_DEFS.map(({ color }) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN);
      return {
        x: half + Math.random() * (W - BOX),
        y: half + Math.random() * (H - BOX),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color,
        img: null,
        scale: 1,
        hovered: false,
      };
    });

    Promise.all(
      ICON_DEFS.map(({ Icon, color }) => makeIconImage(Icon, color, 50)),
    ).then((imgs) => {
      imgs.forEach((img, i) => {
        balls[i].img = img;
      });
    });

    function roundRect(x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
    function onMouseLeave() {
      mouseRef.current = { x: -999, y: -999 };
    }
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    function loop() {
      ctx.clearRect(0, 0, W, H);
      const { x: mx, y: my } = mouseRef.current;

      // physics
      for (const b of balls) {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x - half < 0) {
          b.x = half;
          b.vx = Math.abs(b.vx);
        }
        if (b.x + half > W) {
          b.x = W - half;
          b.vx = -Math.abs(b.vx);
        }
        if (b.y - half < 0) {
          b.y = half;
          b.vy = Math.abs(b.vy);
        }
        if (b.y + half > H) {
          b.y = H - half;
          b.vy = -Math.abs(b.vy);
        }

        const dx = mx - b.x,
          dy = my - b.y;
        b.hovered = Math.sqrt(dx * dx + dy * dy) < half * 1.2;
        const target = b.hovered ? 1.25 : 1;
        b.scale += (target - b.scale) * 0.15;
      }

      // ball-ball collisions
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const a = balls[i],
            b = balls[j];
          const dx = b.x - a.x,
            dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < BOX && dist > 0) {
            const nx = dx / dist,
              ny = dy / dist;
            const overlap = BOX - dist;
            a.x -= (nx * overlap) / 2;
            a.y -= (ny * overlap) / 2;
            b.x += (nx * overlap) / 2;
            b.y += (ny * overlap) / 2;
            const dvx = a.vx - b.vx,
              dvy = a.vy - b.vy;
            const dot = dvx * nx + dvy * ny;
            a.vx -= dot * nx;
            a.vy -= dot * ny;
            b.vx += dot * nx;
            b.vy += dot * ny;
          }
        }
      }

      // draw
      for (const b of balls) {
        const s = b.scale;
        const hw = (BOX * s) / 2;

        ctx.save();
        ctx.translate(b.x, b.y);

        roundRect(-hw, -hw, BOX * s, BOX * s, 14 * s);
        ctx.fillStyle = "rgba(255,255,255,0.1)";
        ctx.fill();
        ctx.strokeStyle = b.hovered ? `${b.color}66` : "rgba(255,255,255,0.12)";
        ctx.lineWidth = b.hovered ? 1.5 : 1;
        ctx.stroke();

        if (b.img) {
          const iconSize = 100 * s;
          ctx.drawImage(
            b.img,
            -iconSize / 6,
            -iconSize / 6.5,
            iconSize,
            iconSize,
          );
        }

        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="relative h-100 w-100 shadow shadow-primary overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <img src="/sitting-image.png" className="absolute" alt="" />
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
