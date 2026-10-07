function APParagraph({ children, className = "" }) {
  return (
    <p className={`ap-paragraph ${className}`}>

      {children}
      
    </p>
  );
}

export default APParagraph;
