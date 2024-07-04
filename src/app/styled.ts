import styled from 'styled-components'

  export const Div = styled.div`
      border: 10px solid black
      margin: 1px;
  `

  export const NoteEditor = styled.div`
    background-color: #fffde7;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `

  export const TextArea = styled.textarea`
    width: 100%;
    min-height: 300px;
    border: none;
    background: none;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    resize: vertical;
  `;
  
  export const Input = styled.input`
    width: 100%;
    border: none;
    background: none;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  `;

  export const SwitchContainer = styled.label`
    margin: 5px;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  `;
 
  export const SwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background-color: #0070f3; 
    }

    &:checked + .slider:before {
      transform: translateX(20px);
    }
  `;
  
  export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc; /* Cor do slider quando o switch está desligado */
    transition: background-color 0.4s;
    border-radius: 20px;

    &:before {
      position: absolute;
      content: '';
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: transform 0.4s;
      border-radius: 50%;
    }
  `;
