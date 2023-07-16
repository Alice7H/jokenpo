import { Button } from "../index";

export function Restart(){
  return  (
    <Button type='button'
      onClick={()=> window.location.reload()}
      className='button-reload'
    >
      Reiniciar
    </Button>
  );
}