const Register = () => {
  return (
    <div>
      <h2>Registrarse</h2>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input type="email" />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
