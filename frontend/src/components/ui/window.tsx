import { Box, Drawer } from "@mui/material";

export default function Window({ onClose, title, children }: {
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}) {
    return <Drawer open={true} onClose={onClose} sx={{
        '& .MuiDrawer-paper': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '70%',
            height: '70vh',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'var(--bg-100)',
            borderRadius: '16px',
            color: 'var(--text-100)',
        },
    }}>

        <div style={{
            width: '100%',
            height: '32px',
            background: 'var(--bg-200)',
            borderRadius: '16px 16px 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end'
        }}>
            <div className="absolute items-center justify-start flex h-8 left-5 text-[var(--text-100)]">
                {title}
            </div>
            <button
                className="title-bar-controls flex items-center justify-center w-12 h-8 hover:bg-[var(--accent-100)] hover:text-[var(--text-100)] transition-all"
                onClick={onClose}>
                <svg className="w-4 h-4 text-[var(--text-100)]" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            </button>
        </div>
        <Box sx={{
            width: '100%',
            height: '100%',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
                width: '8px',
            },
            '&::-webkit-scrollbar-track': {
                background: 'var(--bg-300)',
                borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
                background: 'var(--bg-100)',
                borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
                background: 'var(--bg-100)',
            },
        }}>
            {children}
        </Box>
    </Drawer>
}