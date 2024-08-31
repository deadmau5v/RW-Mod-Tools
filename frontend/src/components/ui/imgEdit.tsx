import { Box } from "@mui/material";
import fabric, { FabricImage } from "fabric";
import { useRef, useEffect } from "react";

const FabricCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvas = useRef<fabric.Canvas | null>(null);

    useEffect(() => {
        const init = async () => {
            if (canvasRef.current) {
                canvas.current = new fabric.Canvas(canvasRef.current);
                // Load and add the image
                const fm = await FabricImage.fromURL('https://cdn1.d5v.cc/CDN/Image/1711297272519.png');
                canvas.current.add(fm);
                canvas.current.renderAll();
            }
        };
        init();
    }, []);

    return <canvas ref={canvasRef} />;
};

export default function ImgEdit() {
    return (
        <Box sx={{
            color: 'var(--text-100)',
        }}>
            <FabricCanvas />
        </Box>
    );
}