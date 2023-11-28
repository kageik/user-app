export interface ButtonProps {
  label: string;
  variant: "contained" | "outlined" | "text";
  color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  size: "small" | "medium" | "large";
  disabled: boolean;
  onClick?: () => void;
}
