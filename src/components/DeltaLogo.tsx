type DeltaLogoProps = {
  className?: string;
};

export const DeltaLogo = ({ className }: DeltaLogoProps) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Replace this path with your actual logo SVG */}
      <path 
        d="M12 2L2 22h20L12 2z" 
        fill="currentColor" 
      />
    </svg>
  );
};
