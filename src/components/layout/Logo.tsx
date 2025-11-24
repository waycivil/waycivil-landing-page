const Logo = () => {
  return (
    <div className="shrink-0">
      <a href="/" className="flex items-center gap-2 tablet:gap-3">
        <img src="/waycivil-logo.svg" alt="WayCivil Logo" className="h-6" />
        <h1 className=" text-xl font-bold">
          <span className="text-foreground">Way</span>
          <span className="text-primary">Civil</span>
        </h1>
      </a>
    </div>
  );
};

export default Logo;
