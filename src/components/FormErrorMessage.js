function FormErrorMessage({ message }) {
  return (
    <div className="user-message">
      <span className="notch"></span>
      {message}
    </div>
  );
}

export default FormErrorMessage;
