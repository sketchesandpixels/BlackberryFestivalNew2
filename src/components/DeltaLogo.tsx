import DeltaLogo from "./DeltaLogo.png";

type DeltaLogoProps = {
  className?: string;
};

export const DeltaLogo = ({ className }: DeltaLogoProps) => {
  return (
    <img 
      src={DeltaLogo} 
      className={className} 
      alt="Delta Sigma Theta Prairie View Alumnae Chapter" 
    />
  );
};
