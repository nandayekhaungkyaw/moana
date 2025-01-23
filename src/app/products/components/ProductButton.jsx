

const ProductButton = ({ className, children, filled = false ,icon,process,iconLeft}) => {
  return (
   
        <button
        onClick={process}
      className={ 
        filled
          ? `bg-gradient-to-r from-primary to-secondary-400 text-white flex items-center justify-center py-2 px-6 h-[36px] rounded-tr-lg rounded-bl-lg ${className} box-border`
          : `flex items-center justify-center py-2 px-6 h-[36px] border-2 border-primary rounded-tr-lg rounded-bl-lg ${className} box-border`
      }
    >
        <span>{iconLeft}</span>
     <span> {children}</span>
     <span>{icon}</span>
    </button>
   
  )
}

export default ProductButton

