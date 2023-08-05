import React from 'react'
import { data as departments } from '../../data/departments'
import { data as branches } from '../../data/branches'
import { data as supportTypes } from '../../data/supportTypes'
import Select from './components/Select'


function SupportRequest() {
  return (
    <>
        <form action="" className='col-12' method="post">
            <h1>Solicitar Soporte</h1>
            <Select options={branches} label="Sucursal" name="branch" />
            <Select options={departments} label="Departamento" name="department" />  

            <div className="form-group  mb-2">
                <label htmlFor="name">Solicitante</label>
                <input className="form-control" type="text" id='name' placeholder="Ejemplo: John Wick"  />
            </div>


            <div className="form-group  mb-2">
                <label htmlFor="name">Correo</label>
                <input className="form-control" type="text" id='name' placeholder="Ejemplo: ventas@massivehome.com.mx"  />
            </div>

            <div className="form-group  mb-2">
                <label htmlFor="exampleFormControlFile1">Descripción del problema</label>
                <textarea name="" id="" className='form-control' placeholder='Describa el problema o necesidad que presenta'></textarea>
            </div>


            <div className="form-group  mb-2">
                <label htmlFor="exampleFormControlFile1">Fotografía</label>
                <input type="file" />
            </div>

            <div className="col-12 py-2 float-right">
                <button className='btn btn-primary'>Generar Solicitud</button>
            </div>

        </form>
    </>
  )
}

export default SupportRequest