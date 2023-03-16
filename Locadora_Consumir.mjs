import {CarroComPlaca} from "./Carro_Com_Placa.mjs"
import { Locadora } from "./Locadora_De_Carros.mjs"

var locadora = new Locadora()
locadora.adicionaCarro(new CarroComPlaca("ABC-9J22"))
locadora.adicionaCarro(new CarroComPlaca("JKL-2P41"))
locadora.consultaCarros()

locadora.abasteceCarro(0,30)
locadora.consultaCarros()

locadora.abasteceCarro(1, 30)
locadora.abasteceCarro(0, 30)
locadora.consultaCarros()