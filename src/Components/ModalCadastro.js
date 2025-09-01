import React, { useState } from 'react';
import './Modal.css';
import losenai from '../assets/imagens/logosenai.png';
import boneco from '../assets/imagens/boneco.png';
import cadeado from '../assets/imagens/cadeado.png';

function ModalCadastro({ isOpen, onClose }) {
  const [form, setForm] = useState({
    email: '',
    nome: '',
    cpf: '',
    telefone: '',
    senha: '',
    tipo: '',
<<<<<<< HEAD
    area: '' // <- Nova propriedade adicionada
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm({ ...form, [name]: type === 'radio' ? value : value });
=======
    area: ''
  });

  const [isSelectOpen, setIsSelectOpen] = useState(false); // controle da seta

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
>>>>>>> 05d32d7 (login alteração)
  };

  const handleSubmit = () => {
    if (!form.email || !form.nome || !form.cpf || !form.telefone || !form.senha || !form.tipo || !form.area) {
      alert('Preencha todos os campos, selecione um tipo de usuário e uma área.');
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(form);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Usuário cadastrado com sucesso!');
    onClose();
  };

  return React.createElement('div', { className: 'modal-overlay', onClick: onClose },
    React.createElement('div', { className: 'modal-container', onClick: e => e.stopPropagation() }, [

      React.createElement('button', { className: 'close-btn', onClick: onClose }, '×'),
      React.createElement('img', { src: losenai, alt: 'Logo SENAI', className: 'logo-senai-modal' }),
      React.createElement('div', { className: 'linha-vermelha' }),
      React.createElement('h2', { className: 'titulo-principal' }, 'Cadastro'),

<<<<<<< HEAD
      // Campo E-mail
=======
      // Email
>>>>>>> 05d32d7 (login alteração)
      React.createElement('div', { className: 'input-icon-container' }, [
        React.createElement('img', { src: boneco, alt: 'Ícone usuário' }),
        React.createElement('input', {
          type: 'email',
          name: 'email',
          placeholder: 'E-mail Educacional',
          value: form.email,
          onChange: handleChange
        })
      ]),

<<<<<<< HEAD
      // Campo Nome
=======
      // Nome
>>>>>>> 05d32d7 (login alteração)
      React.createElement('div', { className: 'input-icon-container' }, [
        React.createElement('img', { src: boneco, alt: 'Ícone usuário' }),
        React.createElement('input', {
          type: 'text',
          name: 'nome',
          placeholder: 'Digite seu nome',
          value: form.nome,
          onChange: handleChange
        })
      ]),

<<<<<<< HEAD
      // Campo CPF
=======
      // CPF
>>>>>>> 05d32d7 (login alteração)
      React.createElement('div', { className: 'input-icon-container' }, [
        React.createElement('img', { src: boneco, alt: 'Ícone usuário' }),
        React.createElement('input', {
          type: 'text',
          name: 'cpf',
          placeholder: 'Digite seu CPF',
          value: form.cpf,
          onChange: handleChange
        })
      ]),

<<<<<<< HEAD
      // Campo Telefone
=======
      // Telefone
>>>>>>> 05d32d7 (login alteração)
      React.createElement('div', { className: 'input-icon-container' }, [
        React.createElement('img', { src: boneco, alt: 'Ícone usuário' }),
        React.createElement('input', {
          type: 'text',
          name: 'telefone',
          placeholder: 'Número de Telefone',
          value: form.telefone,
          onChange: handleChange
        })
      ]),

<<<<<<< HEAD
      // Campo Senha
=======
      // Senha
>>>>>>> 05d32d7 (login alteração)
      React.createElement('div', { className: 'input-icon-container' }, [
        React.createElement('img', { src: cadeado, alt: 'Ícone senha' }),
        React.createElement('input', {
          type: 'password',
          name: 'senha',
          placeholder: 'Senha',
          value: form.senha,
          onChange: handleChange
        })
      ]),

<<<<<<< HEAD
=======
      // Área de Atuação (com select)
      React.createElement('div', {
        className: isSelectOpen ? 'select-wrapper open' : 'select-wrapper'
      }, [
        React.createElement('select', {
          name: 'area',
          value: form.area,
          onChange: handleChange,
          className: 'select-area',
          onFocus: () => setIsSelectOpen(true),
          onBlur: () => setIsSelectOpen(false),
          required: true
        }, [
          React.createElement('option', { value: '', disabled: true }, 'Área de Atuação'),
          React.createElement('option', { value: 'Informática' }, 'Informática'),
          React.createElement('option', { value: 'Mecânica' }, 'Mecânica')
        ])
      ]),

>>>>>>> 05d32d7 (login alteração)
      // Tipo de Usuário
      React.createElement('p', { className: 'user-type-label' }, 'Tipo de Usuário:'),
      React.createElement('div', { className: 'user-type' }, [
        ['Administrador', 'Aluno', 'Funcionário'].map(tipo =>
          React.createElement('label', { key: tipo }, [
            React.createElement('input', {
              type: 'radio',
              name: 'tipo',
              value: tipo,
              checked: form.tipo === tipo,
              onChange: handleChange
            }),
            ` ${tipo} `
          ])
        )
      ]),

<<<<<<< HEAD
      // Área de Atuação
      React.createElement('p', { className: 'user-type-label' }, 'Área de Atuação:'),
      React.createElement('div', { className: 'user-type' }, [
        ['Informática', 'Mecânica'].map(area =>
          React.createElement('label', { key: area }, [
            React.createElement('input', {
              type: 'radio',
              name: 'area',
              value: area,
              checked: form.area === area,
              onChange: handleChange
            }),
            ` ${area} `
          ])
        )
      ]),

      // Botão de Enviar
=======
      // Botão
>>>>>>> 05d32d7 (login alteração)
      React.createElement('button', { className: 'submit-btn', onClick: handleSubmit }, 'Cadastrar')
    ])
  );
}

<<<<<<< HEAD
export default ModalCadastro;
=======
export default ModalCadastro;
>>>>>>> 05d32d7 (login alteração)
