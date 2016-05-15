<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8"/>

	<xsl:template match='/'>
        <html>
        	<head>
        		<title>Productos Disponibles</title>
            </head>
            <xsl:apply-templates/>
        </html>
	</xsl:template>
    
    <xsl:template match='inventario'>
    	<style>
    		table {
			    border-collapse: collapse;
			    width: 90%;
			}

			th, td {
			    text-align: center;
			    padding: 8px;
			}

			tr:nth-child(even) {
				background-color: #f2f2f2
			}

			th {
			    background-color: #009688;
			    color: white;
			}

			table tr:hover {
				background-color: #ddd;
			}
				
			body {
				background-color:#EEEEEE;
			}
			
			ul, p {
				list-style-type: none;
				margin: 0px;
				padding: 0px;
				text-align: center;
			}
			
			p {
				display: inline;
			}
			
			#titulo {
				text-decoration: underline;
				font-size: 17px;
				font-weight: bold;
				color: #603;
			}
			
			.cajacontenedoraTitulo {
				font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
				font-size: 20px;
				text-align: center;
				padding: 0.01em 16px;
				border-top-left-radius: 8px;
				border-top-right-radius: 8px;
			}
			
			.cajacontenedoraPie {
				font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
				text-align: right;
				padding: 0.01em 16px;
				margin-top: 30px;
				border-bottom-left-radius: 8px;
				border-bottom-right-radius: 8px;
			}
			
			.Tealcolor {
				color: #fff;
				background-color: #009688;
			}
		</style>
    	<body>
        	<header class="cajacontenedoraTitulo Tealcolor" id="inicio">
				<h1>Productos Disponibles</h1>
			</header><br />
            
			<table border="1" align="center">
            	<tr>
                    <th>Código</th>
					<th>Descripción</th>
					<th>Precio</th>
				</tr>
                <xsl:apply-templates select='productos'/>
            </table>
            
            <footer class="cajacontenedoraPie Tealcolor" id="fin">
                <br />
                <address>Desarrollado por:</address>
                <address><b>Jesús Romero</b> - C.I.: 20.753.800</address>
                <address><b>Yessica Ríos</b> - C.I.: 20.786.743</address><br />
			</footer>
        </body>    
    </xsl:template>
    
    <xsl:template match='productos'>
        <tr>
        	<td>
                <xsl:value-of select="codigo"/>
        	</td>
            <td>
            	<xsl:value-of select="descripcion"/>
            </td>
            <td>
                <xsl:value-of select="precio"/>
        	</td>
        </tr>
    </xsl:template>

</xsl:stylesheet>