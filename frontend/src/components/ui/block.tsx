import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type BlockProps = {
    className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
return (
    <motion.div
    variants={{
        initial: {
        scale: 0.5,
        y: 50,
        opacity: 0,
        },
        animate: {
        scale: 1,
        y: 0,
        opacity: 1,
        },
    }}
    transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
    }}
    className={twMerge(
        "border-border dark:border-darkBorder dark:bg-darkBg shadow-light dark:shadow-dark rounded-base border-2 bg-white p-6",
        className
    )}
    {...rest}
    />
);
};
export default Block;