import React, { FC, ReactNode } from "react";
import styles from './banner.module.css';
interface BannerProps {
  variant?: "info" | "congrats" | "documentation" | "danger";
  children: ReactNode;
}

export function Banner(props: BannerProps) {
    return (
        <aside style={{
            margin: "1.5rem auto",
            borderRadius: "0px 10px 10px 0px",
            padding: "0.8em 1em",
            lineHeight: "1.2",
            textAlign: "center",
            position: "relative",
            clear: "both",
            maxWidth: "500px",
            content: '"🔑"'
          }} className={styles['info']}>
        
            {props.children}
            </aside>
    );
  }
  
  export default Banner;