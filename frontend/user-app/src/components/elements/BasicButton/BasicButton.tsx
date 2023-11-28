"use client";

import Button from "@mui/material/Button";
import { ButtonProps } from "./types";

export const BasicButton = ({ label, variant = "contained", color = "primary", size = "medium", ...props }: ButtonProps) => {
  return (
    <Button variant={variant} size={size} color={color} onClick={() => props.onClick} {...props}>
      {label}
    </Button>
  );
};
