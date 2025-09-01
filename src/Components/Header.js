import React, { useState } from 'react';
import './Header.css';
<<<<<<< HEAD
=======
import { useNavigate } from 'react-router-dom'; // ✅ Importa useNavigate
>>>>>>> 05d32d7 (login alteração)
import logoSenai from '../assets/imagens/logosenai.png';
import iconeUsuario from '../assets/imagens/boneco.png';

import ModalLogin from './ModalLogin';
import ModalCadastro from './ModalCadastro';
import ModalSenha from './ModalSenha';

function Header() {
<<<<<<< HEAD
=======
  const navigate = useNavigate(); // ✅ Hook de navegação
>>>>>>> 05d32d7 (login alteração)
  const [modalAberto, setModalAberto] = useState(''); // 'login', 'cadastro', 'senha', ''

  const menuItems = [
    { texto: 'O SENAI', ativo: true, link: 'https://www.sp.senai.br/' },
<<<<<<< HEAD
    { texto: 'Manifestação Anônima' },
    { texto: 'Transparência', link: 'https://transparencia.sp.senai.br/' },
    { texto: 'Contato com a Ouvidoria', link: 'https://wa.me/551156423407' },
  ];

=======
    { texto: 'Transparência', link: 'https://transparencia.sp.senai.br/' },
    { texto: 'Contato com a Ouvidoria' }
  ];

  // ✅ Lógica do botão SOU ALUNO
  function handleAlunoClick() {
    const usuarioLogado = localStorage.getItem('usuarioLogado');

    if (usuarioLogado) {
      navigate('/Admin'); // Já logado → vai direto para /usuario
    } else {
      setModalAberto('login'); // Não logado → abre modal de login
    }
  }

>>>>>>> 05d32d7 (login alteração)
  return (
    <>
      <header className="header">
        <img src={logoSenai} alt="Logo SENAI" className="logo-senai" />

        <nav className="nav-menu">
          {menuItems.map(({ texto, ativo, link }, index) => (
            <a
              href={link ? link : '#'}
              key={index}
              className={`nav-item ${ativo ? 'ativo' : ''}`}
              {...(link ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {texto}
            </a>
          ))}
        </nav>

        <button
          className="usuario"
          type="button"
<<<<<<< HEAD
          onClick={() => setModalAberto('login')}
=======
          onClick={handleAlunoClick} // ✅ Agora verifica se está logado
>>>>>>> 05d32d7 (login alteração)
        >
          <div className="divisor" />
          <img src={iconeUsuario} alt="Usuário" className="icone-usuario" />
          <span className="sou-aluno">SOU ALUNO</span>
        </button>
      </header>

      {/* Modal Login */}
      {React.createElement(ModalLogin, {
        key: 'modal-login',
        isOpen: modalAberto === 'login',
        onClose: () => setModalAberto(''),
        onCadastro: () => setModalAberto('cadastro'),
        onEsqueciSenha: () => setModalAberto('senha')
      })}

      {/* Modal Cadastro */}
      {React.createElement(ModalCadastro, {
        key: 'modal-cadastro',
        isOpen: modalAberto === 'cadastro',
        onClose: () => setModalAberto('login')
      })}

      {/* Modal Esqueci Senha */}
      {React.createElement(ModalSenha, {
        key: 'modal-senha',
        isOpen: modalAberto === 'senha',
        onClose: () => setModalAberto('login')
      })}
    </>
  );
}

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> 05d32d7 (login alteração)
