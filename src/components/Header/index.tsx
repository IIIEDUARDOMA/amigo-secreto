import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div
        className="logo-image"
        role="img"
        aria-label="Logo do Sorteador"
      ></div>
      <img
        className="participant"
        src="/imagens/participante.png"
        alt="Logo Sorteador de Amigo Secreto"
      />
    </header>
  );
};

export default Header;
