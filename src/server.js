const express = require('express')
const fs = require('fs')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 80
app.use(cors())
const Routes1_FlujoPrincipal = require('./routes/1_FlujoPrincipal')
const Routes2_DetalleLote = require('./routes/2_DetalleLote')
const Routes3_Consultas = require('./routes/3_Consultas')
const Routes4_Historial = require('./routes/4_Historial')
const Routes5_Conciliacion = require('./routes/5_Conciliacion')
const Routes6_DetalleConciliacion = require('./routes/6_DetalleConciliacion')
const Routes7_ConsultaSunat = require('./routes/7_ConsultaSunat');
const Routes8_GrupoPago = require('./routes/8_GrupoPago');

app.use(express.json())
app.get('/', (req, res) => res.send('Hello World'))

app.use('/FlujoPrincipal', Routes1_FlujoPrincipal)
app.use('/DetalleLote', Routes2_DetalleLote)
app.use('/Consultas', Routes3_Consultas)
app.use('/Historial', Routes4_Historial)
app.use('/Conciliacion', Routes5_Conciliacion)
app.use('/DetalleConciliacion', Routes6_DetalleConciliacion)
app.use('/ConsultaSunat', Routes7_ConsultaSunat)
app.use('/GruposPago', Routes8_GrupoPago)

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))
