"use client"
import { useState } from "react";
import { Get } from "./controllers/noteControllers";
import { NoteEditor, TextArea, Input, SwitchContainer, SwitchInput, Slider } from "./styled";

export default function Home() {
  const [title, setTitle] = useState("");
  const [isService, setIsService] = useState(false);
  const [called, setCalled] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // const data = {
    //   title,
    //   isService,
    //   called,
    //   content
    // }
    const notes = Get();
    console.log(notes)
  }
 
  const Switch = ({ id, checked, onChange }: any) => (
    <SwitchContainer>
      <SwitchInput
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <Slider className="slider" />
    </SwitchContainer>
  );

  const handleSwitchChange = () => {
    setIsService(!isService);
  };

  return <div>
    <form onSubmit={handleSubmit}>
      <NoteEditor>
        <Input 
          type="text" 
          value={title}
          placeholder="Titulo"
          onChange={({ target }) => setTitle(target.value)}
        />
      </NoteEditor>
      <Switch id="toggle" checked={isService} onChange={handleSwitchChange} />
      <label htmlFor="toggle">{isService ? 'Sim' : 'Não'}</label>
      <div>
        { isService === true ? 
          <NoteEditor>
            <Input 
              type="text" 
              value={called}
              placeholder="Nº Chamado"
              onChange={({ target }) => setCalled(target.value)}
            />
          </NoteEditor> : "" }
      </div>
      <NoteEditor>
        <TextArea
          value={content}
          onChange={({target}) => setContent(target.value) }
          placeholder="Digite sua nota aqui..."
        />
      </NoteEditor>
      <button>
        Salvar
      </button>
    </form>
  </div>;
}
