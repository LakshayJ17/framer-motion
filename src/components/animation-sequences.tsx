import { motion, useAnimate } from "motion/react";

export const AnimationSequences = () => {
    const [scope, animate] = useAnimate();

    const startAnimating = async () => {
        animate(
            ".text",
            {
                display: "none",
            },
            {
                duration: 0.1,
            },
        );

        await animate(
            "button",
            {
                width: "5rem",
                borderRadius: "1000px"
            },
            {
                duration: 0.3,
            },
        );

        animate('button', {
            opacity: 1,
            scale: [1, 1.2, 0.8, 1],
            backgroundImage: "linear-gradient(to right, #00ff99, #00ccff)"
        }, {
            duration: 0.5
        });

        animate("button", {
            backgroundImage: "linear-gradient(to right, #00ff99, #00ccff)"
        }, {
            duration: 0.8
        });

        animate('.check-icon', {
            opacity: 1
        }, {
            duration: 0.3
        });

        animate('.check-path', {
            pathLength: 1
        }, {
            duration: 0.3
        });

    };
    
    return (
        <div
            ref={scope}
            className="relative flex h-20 w-[30rem] items-center justify-center"
        >
            <motion.button
                onClick={startAnimating}
                style={{
                    width: "30rem",
                }}
                className="h-20 cursor-pointer rounded-lg bg-purple-500 font-medium text-white"
            >
                <span className="text">Purchase now ($20)</span>
            </motion.button>
            
            <motion.svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FFFFFF"
                strokeWidth={3}
                className="check-icon absolute inset-0 m-auto z-50 pointer-events-none"
                style={{
                    opacity: 0,
                    width: "2rem",
                    height: "2rem"
                }}
            >
                <motion.path 
                    className="check-path"
                    initial={{
                        pathLength: 0
                    }}
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M5 13l4 4L19 7" 
                />
            </motion.svg>
        </div>
    );
};