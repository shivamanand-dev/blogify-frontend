"use client";

import { useEffect } from "react";
import { StyledHeartCanvas } from "./StyledHeartCanvas";

const HeartCanvas = () => {
    useEffect(() => {
        const canvas = document.getElementById('c') as HTMLCanvasElement;
        const context = canvas.getContext('2d');
    
        if (!context) {
          return;
        }
    
        // Set canvas size to match screen width and height
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        // Your custom script
        const b = document.body;
        const customCanvasScript = document.body.clientWidth;
    
        // The existing code from the previous responses
        const e: { x: number; y: number; X: number; Y: number; R: number; S: number; q: number; D: number; F: number; f: string }[][] = [];
        const h: [number, number][] = [];
        const O: number = window.innerWidth;
        const Q: number = window.innerHeight;
        const v: number = 32;
        const M: Math = Math;
        const R: () => number = M.random;
        const C: (x: number) => number = M.cos;
        const Y: number = 6.3;
    
        for (let i = 0; i < Y; i += 0.2) {
          h.push([
            O / 2 + 180 * M.pow(M.sin(i), 3),
            Q / 2 + 10 * (-(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i)),
            ),
          ]);
        }
    
        let i: number = 0;
        while (i < v) {
          const x: number = R() * O;
          const y: number = R() * Q;
    
          const H: number = (i / v) * 80 + 280;
          const S: number = R() * 40 + 60;
          const B: number = R() * 60 + 20;
    
          const f: {
            x: number;
            y: number;
            X: number;
            Y: number;
            R: number;
            S: number;
            q: number;
            D: number;
            F: number;
            f: string;
          }[] = [];
          let k: number = 0;
          while (k < v) {
            f[k++] = {
              x: x,
              y: y,
              X: 0,
              Y: 0,
              R: (1 - k / v) + 1,
              S: R() + 1,
              q: ~~(R() * v),
              D: i % 2 * 2 - 1,
              F: R() * 0.2 + 0.7,
              f: `hsla(00, ${~~S}%, ${~~B}%, 0.1)`,
            };
          }
    
          e[i++] = f;
        }
    
        function render(_: {
          x: number;
          y: number;
          X: number;
          Y: number;
          R: number;
          S: number;
          q: number;
          D: number;
          F: number;
          f: string;
        }) {
          context.fillStyle = _.f;
          context.beginPath();
          context.arc(_.x, _.y, _.R, 0, Y, 1);
          context.closePath();
          context.fill();
        }
    
        setInterval(function () {
          context.fillStyle = 'rgba(0, 0, 0, 0.2)';
          context.fillRect(0, 0, O, Q);
    
          i = v;
          while (i--) {
            const f: {
              x: number;
              y: number;
              X: number;
              Y: number;
              R: number;
              S: number;
              q: number;
              D: number;
              F: number;
              f: string;
            }[] = e[i];
            const u: {
              x: number;
              y: number;
              X: number;
              Y: number;
              R: number;
              S: number;
              q: number;
              D: number;
              F: number;
              f: string;
            } = f[0];
            const q: [number, number] = h[u.q];
            const D: number = u.x - q[0];
            const E: number = u.y - q[1];
            const G: number = M.sqrt(D * D + E * E);
    
            if (G < 10) {
              if (R() > 0.95) {
                u.q = ~~(R() * v);
              } else {
                if (R() > 0.99) u.D *= -1;
                u.q += u.D;
                u.q %= v;
                if (u.q < 0) u.q += v;
              }
            }
    
            u.X += (-D / G) * u.S;
            u.Y += (-E / G) * u.S;
    
            u.x += u.X;
            u.y += u.Y;
    
            render(u);
    
            u.X *= u.F;
            u.Y *= u.F;
    
            let k: number = 0;
            while (k < v - 1) {
              const T: {
                x: number;
                y: number;
                X: number;
                Y: number;
                R: number;
                S: number;
                q: number;
                D: number;
                F: number;
                f: string;
              } = f[k];
              const N: {
                x: number;
                y: number;
                X: number;
                Y: number;
                R: number;
                S: number;
                q: number;
                D: number;
                F: number;
                f: string;
              } = f[++k];
              N.x -= (N.x - T.x) * 0.7;
              N.y -= (N.y - T.y) * 0.7;
              render(N);
            }
          }
        }, 25);
      }, []);

  return (
    <StyledHeartCanvas>
      <canvas id="c" />
    </StyledHeartCanvas>
      );
};

export default HeartCanvas;
