"use client";
import { Suspense, lazy } from 'react'
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function SceneLoader({ className = "", scene }: { className: string, scene: string}) {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
        <Spline scene={scene} className={className} />
    </Suspense>
  )
}
