<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version = "1.0" xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

	<xsl:output method = "html" omit-xml-declaration = "no"  
				doctype-system = "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd" 
				doctype-public = "-//W3C//DTD XHTML 1.0 Strict//EN" />

	<xsl:template match = "/">
		<html xmlns = "http://www.w3.org/1999/xhtml">
      
			<head>
				<title><xsl:value-of select = "product/@name"/> </title>
			</head>
			 
			<body>
				<h3><xsl:value-of select = "product/@name"/></h3> 
				<h4><xsl:value-of select = "product/servingsize"/></h4>
				<table border = "1">
					<thead>
						<tr>
							<th>calories</th>
							<th>sodium</th>
							<th>cholesterol</th>
							<th>fat</th>
							<th>carbohydrates</th>
							<th>protein</th>
						</tr>
					</thead>

					<xsl:for-each select = "product">
						<tr>
							<td>total: <xsl:value-of select = "calories/total"/></td>	
							<td><xsl:value-of select = "sodium"/></td>
							<td><xsl:value-of select = "cholesterol"/></td>
							<td>total: <xsl:value-of select = "fat/total"/></td>
							<td>total: <xsl:value-of select = "carbohydrates/total"/></td>
							<td><xsl:value-of select = "protein"/></td>
						</tr>
					</xsl:for-each>

					<xsl:for-each select = "product">
						<tr>
							<td>fat: <xsl:value-of select = "calories/fat"/></td>
							<td></td>
							<td></td>
							<td>saturated: <xsl:value-of select = "fat/saturated"/></td>
							<td>fiber: <xsl:value-of select = "carbohydrates/sugars"/></td>
							<td></td>  
						</tr>
					</xsl:for-each>

					<xsl:for-each select = "product">
						<tr>
							<td></td>  
							<td></td>
							<td></td>
							<td></td>
							<td>sugars: <xsl:value-of select ="carbohydrates/fiber"/></td>
							<td></td>  
						</tr>
					</xsl:for-each>

				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>