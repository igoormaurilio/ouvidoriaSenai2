import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CrudService from '../../services/CrudService';
import '../Elogio/Elogio.css';
import Footer from '../../Components/Footer';
import HeaderSimples from '../../Components/HeaderSimples';
import SetaVoltar from '../../Components/SetaVoltar';

function Elogio() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    contato: '',
    local: '',
    dataHora: '',
    descricao: '',
    anexo: null
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert('O arquivo é muito grande. O tamanho máximo é 5MB.');
      return;
    }
    setFormData(prevState => ({
      ...prevState,
      anexo: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
<<<<<<< HEAD
    // Validar campos obrigatórios
=======
>>>>>>> 05d32d7 (login alteração)
    if (!formData.descricao) {
      alert('Por favor, preencha a descrição do elogio.');
      return;
    }
    
<<<<<<< HEAD
    // Obter usuário logado, se existir
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    
    // Criar objeto de elogio
=======
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    
>>>>>>> 05d32d7 (login alteração)
    const elogio = {
      ...formData,
      tipo: CrudService.TIPOS_MANIFESTACAO.ELOGIO,
      anexoNome: formData.anexo ? formData.anexo.name : null,
      email: usuarioLogado ? usuarioLogado.email : null
    };
    
<<<<<<< HEAD
    // Salvar no localStorage
    CrudService.create(elogio);
    
    // Redirecionar para página de confirmação
    navigate('/confirmacao');
  };

  return (
    <div className="elogio-container">
      <HeaderSimples />
      <SetaVoltar />

      <div className="elogio-content">
        <h2 className="titulo-pagina">Faça um elogio</h2>

        <div className="instrucoes-preenchimento">
          <p><strong>* Campos Obrigatórios</strong></p>
          <p>* Tamanho máximo para Anexar arquivo: 5 Megabytes.</p>
          <p>Explique em quais casos a denúncia pode ser feita e reforce a confidencialidade do processo.</p>
        </div>

        <div className="form-box">
          <form className="formulario-elogio" onSubmit={handleSubmit}>
            <label>Nome (opcional)</label>
            <input 
              type="text" 
              name="nome" 
              value={formData.nome} 
              onChange={handleChange} 
              placeholder="Digite aqui..." 
            />

            <label>E-mail ou Telefone *</label>
            <input 
              type="text" 
              name="contato" 
              value={formData.contato} 
              onChange={handleChange} 
              placeholder="Digite aqui..." 
              required 
            />

            <label>Local do elogio *</label>
            <input 
              type="text" 
              name="local" 
              value={formData.local} 
              onChange={handleChange} 
              placeholder="Digite aqui..." 
              required 
            />

            <label>Data e Hora do elogio *</label>
            <input 
              type="text" 
              name="dataHora" 
              value={formData.dataHora} 
              onChange={handleChange} 
              placeholder="Digite aqui..." 
              required 
            />

            <label>Descrição detalhada do elogio *</label>
            <div className="textarea-container">
              <textarea 
                name="descricao" 
                value={formData.descricao} 
                onChange={handleChange} 
                rows="6" 
                placeholder="Digite aqui..." 
                required
              ></textarea>
              <label htmlFor="file-upload-elogio" className="custom-file-upload">
                <img
                  src={require('../../assets/imagens/icone-anexo.png')}
                  alt="Anexar"
                  className="icone-anexar"
                />
              </label>
              <input 
                id="file-upload-elogio" 
                type="file" 
                onChange={handleFileChange} 
                style={{display: 'none'}} 
              />
              {formData.anexo && (
                <p className="arquivo-selecionado">Arquivo selecionado: {formData.anexo.name}</p>
              )}
            </div>

            <small>Atenção: Evite compartilhar imagens que possam comprometer sua segurança ou de outra pessoa.</small>

            <button type="submit" className="btn-confirmar">Confirmar</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Elogio;
=======
    CrudService.create(elogio);
    navigate('/confirmacao');
  };

  const handleAnonimoSubmit = (e) => {
    e.preventDefault();

    if (!formData.descricao) {
      alert('Por favor, preencha a descrição do elogio.');
      return;
    }

    const elogioAnonimo = {
      ...formData,
      nome: 'Anônimo',
      contato: 'Não informado',
      tipo: CrudService.TIPOS_MANIFESTACAO.ELOGIO,
      anexoNome: formData.anexo ? formData.anexo.name : null,
      email: null
    };

    CrudService.create(elogioAnonimo);
    navigate('/confirmacao');
  };

  return React.createElement(
    'div',
    { className: 'elogio-container' },
    React.createElement(HeaderSimples, null),
    React.createElement(SetaVoltar, null),
    React.createElement(
      'div',
      { className: 'elogio-content' },
      React.createElement('h2', { className: 'titulo-pagina' }, 'Faça um elogio'),
      React.createElement(
        'div',
        { className: 'instrucoes-preenchimento' },
        React.createElement('p', null, React.createElement('strong', null, '* Campos Obrigatórios')),
        React.createElement('p', null, '* Tamanho máximo para Anexar arquivo: 5 Megabytes.'),
        React.createElement('p', null, 'Explique em quais casos a denúncia pode ser feita e reforce a confidencialidade do processo.')
      ),
      React.createElement(
        'div',
        { className: 'form-box' },
        React.createElement(
          'form',
          { className: 'formulario-elogio', onSubmit: handleSubmit },
          React.createElement('label', null, 'Nome (opcional)'),
          React.createElement('input', {
            type: 'text',
            name: 'nome',
            value: formData.nome,
            onChange: handleChange,
            placeholder: 'Digite aqui...'
          }),
          React.createElement('label', null, 'E-mail ou Telefone *'),
          React.createElement('input', {
            type: 'text',
            name: 'contato',
            value: formData.contato,
            onChange: handleChange,
            placeholder: 'Digite aqui...',
            required: true
          }),
          React.createElement('label', null, 'Local do elogio *'),
          React.createElement('input', {
            type: 'text',
            name: 'local',
            value: formData.local,
            onChange: handleChange,
            placeholder: 'Digite aqui...',
            required: true
          }),
          React.createElement('label', null, 'Data e Hora do elogio *'),
          React.createElement('input', {
            type: 'text',
            name: 'dataHora',
            value: formData.dataHora,
            onChange: handleChange,
            placeholder: 'Digite aqui...',
            required: true
          }),
          React.createElement('label', null, 'Descrição detalhada do elogio *'),
          React.createElement(
            'div',
            { className: 'textarea-container' },
            React.createElement('textarea', {
              name: 'descricao',
              value: formData.descricao,
              onChange: handleChange,
              rows: 6,
              placeholder: 'Digite aqui...',
              required: true
            }),
            React.createElement(
              'label',
              { htmlFor: 'file-upload-elogio', className: 'custom-file-upload' },
              React.createElement('img', {
                src: require('../../assets/imagens/icone-anexo.png'),
                alt: 'Anexar',
                className: 'icone-anexar'
              })
            ),
            React.createElement('input', {
              id: 'file-upload-elogio',
              type: 'file',
              onChange: handleFileChange,
              style: { display: 'none' }
            }),
            formData.anexo &&
              React.createElement(
                'p',
                { className: 'arquivo-selecionado' },
                'Arquivo selecionado: ',
                formData.anexo.name
              )
          ),
          React.createElement('small', null, 'Atenção: Evite compartilhar imagens que possam comprometer sua segurança ou de outra pessoa.'),
          React.createElement(
            'div',
            { style: { display: 'flex', gap: '10px', marginTop: '15px', justifyContent: 'center' } },
            React.createElement(
              'button',
              { type: 'submit', className: 'btn-confirmar' },
              'Confirmar'
            ),
            React.createElement(
              'button',
              {
                type: 'button',
                className: 'btn-confirmar',
                style: { backgroundColor: '#666' },
                onClick: handleAnonimoSubmit
              },
              'Enviar Anônimo'
            )
          )
        )
      )
    ),
    React.createElement(Footer, null)
  );
}

export default Elogio;
>>>>>>> 05d32d7 (login alteração)
