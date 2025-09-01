import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CrudService from '../../services/CrudService';
import '../Sugestao/Sugestao.css';
import Footer from '../../Components/Footer';
import HeaderSimples from '../../Components/HeaderSimples';
import SetaVoltar from '../../Components/SetaVoltar';

function Sugestao() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    contato: '',
    local: '',
    dataHora: '',
    descricao: '',
    anexo: null
  });
<<<<<<< HEAD
  
=======

>>>>>>> 05d32d7 (login alteração)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
<<<<<<< HEAD
  
=======

>>>>>>> 05d32d7 (login alteração)
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
    if (!formData.descricao) {
      alert('Por favor, preencha a descrição da sugestão.');
      return;
    }
    
    // Obter usuário logado, se existir
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    
    // Criar objeto de sugestão
=======

    if (!formData.contato || !formData.local || !formData.dataHora || !formData.descricao) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

>>>>>>> 05d32d7 (login alteração)
    const sugestao = {
      ...formData,
      tipo: CrudService.TIPOS_MANIFESTACAO.SUGESTAO,
      anexoNome: formData.anexo ? formData.anexo.name : null,
      email: usuarioLogado ? usuarioLogado.email : null
    };
<<<<<<< HEAD
    
    // Salvar no localStorage
    CrudService.create(sugestao);
    
    // Redirecionar para página de confirmação
    navigate('/confirmacao');
  };

  return (
    <div className="sugestao-container">
      <HeaderSimples />
      <SetaVoltar />

      <div className="sugestao-content">
        <h2 className="titulo-pagina">Faça uma sugestão</h2>

        <div className="instrucoes-preenchimento">
          <p><strong>* Campos Obrigatórios</strong></p>
          <p>* Tamanho máximo para Anexar arquivo: 5 Megabytes.</p>
          <p>Explique em quais casos a denúncia pode ser feita e reforce a confidencialidade do processo.</p>
        </div>

        <div className="form-box">
          <form className="formulario-sugestao" onSubmit={handleSubmit}>
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

            <label>Local da sugestão *</label>
            <input 
              type="text" 
              name="local" 
              value={formData.local} 
              onChange={handleChange} 
              placeholder="Digite aqui..." 
              required 
            />

            <label>Data e Hora da sugestão *</label>
            <input 
              type="text" 
              name="dataHora" 
              value={formData.dataHora} 
              onChange={handleChange} 
              placeholder="Digite aqui..." 
              required 
            />

            <label>Descrição detalhada da sugestão *</label>
            <div className="textarea-container">
              <textarea 
                name="descricao" 
                value={formData.descricao} 
                onChange={handleChange} 
                rows="6" 
                placeholder="Digite aqui..." 
                required
              ></textarea>
              <label htmlFor="file-upload-sugestao" className="custom-file-upload">
                <img
                  src={require('../../assets/imagens/icone-anexo.png')}
                  alt="Anexar"
                  className="icone-anexar"
                />
              </label>
              <input 
                id="file-upload-sugestao" 
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

export default Sugestao;
=======

    CrudService.create(sugestao);
    navigate('/confirmacao');
  };

  const handleAnonimoSubmit = (e) => {
    e.preventDefault();

    if (!formData.contato || !formData.local || !formData.dataHora || !formData.descricao) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const sugestaoAnonima = {
      ...formData,
      nome: 'Anônimo',
      contato: 'Não informado',
      tipo: CrudService.TIPOS_MANIFESTACAO.SUGESTAO,
      anexoNome: formData.anexo ? formData.anexo.name : null,
      email: null
    };

    CrudService.create(sugestaoAnonima);
    navigate('/confirmacao');
  };

  return React.createElement(
    'div',
    { className: 'sugestao-container' },
    React.createElement(HeaderSimples, null),
    React.createElement(SetaVoltar, null),

    React.createElement(
      'div',
      { className: 'sugestao-content' },
      React.createElement('h2', { className: 'titulo-pagina' }, 'Faça uma sugestão'),

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
          { className: 'formulario-sugestao', onSubmit: handleSubmit },

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

          React.createElement('label', null, 'Local da sugestão *'),
          React.createElement('input', {
            type: 'text',
            name: 'local',
            value: formData.local,
            onChange: handleChange,
            placeholder: 'Digite aqui...',
            required: true
          }),

          React.createElement('label', null, 'Data e Hora da sugestão *'),
          React.createElement('input', {
            type: 'text',
            name: 'dataHora',
            value: formData.dataHora,
            onChange: handleChange,
            placeholder: 'Digite aqui...',
            required: true
          }),

          React.createElement('label', null, 'Descrição detalhada da sugestão *'),
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
              { htmlFor: 'file-upload-sugestao', className: 'custom-file-upload' },
              React.createElement('img', {
                src: require('../../assets/imagens/icone-anexo.png'),
                alt: 'Anexar',
                className: 'icone-anexar'
              })
            ),
            React.createElement('input', {
              id: 'file-upload-sugestao',
              type: 'file',
              onChange: handleFileChange,
              style: { display: 'none' }
            }),
            formData.anexo && React.createElement(
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

export default Sugestao;
>>>>>>> 05d32d7 (login alteração)
