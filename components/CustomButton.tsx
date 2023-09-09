interface Props {
  title: string;
  
}

const CustomButton = ({title} :Props) => {
  return (
    <button className="btn">
        {title}
    </button>
  )
}

export default CustomButton