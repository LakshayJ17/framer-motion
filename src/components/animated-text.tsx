import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

export const AnimatedText = () => {
    const [scope, animate] = useAnimate();

    const text =
        "Welcome to TaskFlux ! Automate your workflows with ease using TaskFlux's easy to use workflow Builder. Checkout AI workflow builder for better experience";

    useEffect(() => {
        startAnimating();
    }, []);

    const startAnimating = () => {
        animate(
            "span",
            {
                opacity: 1,
                filter: "blur[0px]",
                y: 0,
            },
            {
                duration: 0.5,
                ease: "easeInOut",
                delay: stagger(0.02),
            },
        );
    };

    return (
        <div
            ref={scope}
            className="mx-auto max-w-2xl text-4xl font-bold text-white"
        >
            <button
                onClick={startAnimating}
                className="cursor-pointer rounded-md bg-neutral-800 px-4 py-2 active:scale-110 transition duration-200"
            >
                {" "}
                What is TaskFlux ?{" "}
            </button>
            {text.split(" ").map((word, index) => (
                <motion.span
                    style={{
                        opacity: 0,
                        filter: "blur[10px]",
                        y: 10,
                    }}
                    className="inline-block"
                    key={word + index}
                >
                    {word} &nbsp;
                </motion.span>
            ))}
        </div>
    );
};
