const Button = ({onClick}) => {
  return (
    <div className="text-white flex items-center justify-center bg-orange-500 rounded-md p-2 text-lg">
      <button onClick={onClick}>Send Notification</button>
    </div>
  );
};

export default Button;
