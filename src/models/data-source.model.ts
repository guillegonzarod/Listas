export interface IContacts {
    // Propiedades:
    codigoEmpresa: number;
    codigoCliente: string;
    cifDni?: string;
    razonSocial?: string;
    nombre?: string;
    domicilio?: string;
    codigoPostal?: string;
    municipio?: string;
    provincia?: string;
    nacion?: string;
    telefono?: string;
    telefono2?: string;
    email1?: string;
    observaciones1?: string;
    potencial: boolean;
    personaContacto?: string;
    fechaUltimaModificacion: Date;
}

export interface IGroupContacts {
    // Propiedades:
    letra?: string;
    contactosGrupo: IContacts[];
    potenciales?: boolean;
    titulo?: string;
}

// Fuente de datos:
export const CONTACTOS: IContacts[] = [
    { codigoEmpresa: 1, codigoCliente: '43000001', cifDni: '56743218H', razonSocial: 'CONSTRUCCIONES BLANCAS, S.L.', nombre: 'CONSTRUCCIONES BLANCAS', domicilio: 'Avda. de Vigo, 324', codigoPostal: '36001', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente CONSTRUCCIONES BLANCAS, S.L.', potencial: false, personaContacto: 'Juan Pérez', fechaUltimaModificacion: new Date('2002-02-07 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000002', cifDni: '12345678W', razonSocial: 'FRÍO INSTALACIONES, S.L.U.', nombre: 'FRÍO INSTALACIONES', domicilio: 'Calle Benito Corbal, 34', codigoPostal: '36008', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente FRÍO INSTALACIONES, S.L.U.', potencial: false, personaContacto: 'Luis García', fechaUltimaModificacion: new Date('2012-05-10 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000003', cifDni: '87654321X', razonSocial: 'CARPINTERÍA EUCALIPTO, S.A.', nombre: 'CARPINTERÍA EUCALIPTO', domicilio: 'Calle Joaquín Costa, 2', codigoPostal: '36003', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente CARPINTERÍA EUCALIPTO, S.A.', potencial: true, personaContacto: 'Pedro Gómez', fechaUltimaModificacion: new Date('2010-12-15 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000004', cifDni: '12345678W', razonSocial: 'SUPERMERCADOS AZÚCAR, S.L.', nombre: 'SUPERMERCADOS AZÚCAR', domicilio: 'Avda. de Lugo, 90', codigoPostal: '36002', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente SUPERMERCADOS AZÚCAR, S.L.', potencial: false, personaContacto: 'José González', fechaUltimaModificacion: new Date('2008-01-20 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000005', cifDni: '87654321X', razonSocial: 'LIBRERÍA ROTULADOR, S.A.', nombre: 'LIBRERÍA ROTULADOR', domicilio: 'Calle La Estrada, 25', codigoPostal: '36005', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente LIBRERÍA ROTULADOR, S.A.', potencial: false, personaContacto: 'Ricardo Pérez', fechaUltimaModificacion: new Date('2018-10-30 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000006', cifDni: '12345678W', razonSocial: 'BAR CHUPITOS, S.A.', nombre: 'BAR CHUPITOS', domicilio: 'Calle Loureiro Crespo, 20', codigoPostal: '36004', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente BAR CHUPITOS, S.A.', potencial: true, personaContacto: 'Tomás López', fechaUltimaModificacion: new Date('2017-03-03 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000007', cifDni: '87654321X', razonSocial: 'Susana Pérez García', nombre: 'FLORISTERÍA ROSAS', domicilio: 'Calle Sagasta, 25', codigoPostal: '36084', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente Susana Pérez García', potencial: false, personaContacto: 'Susana Pérez', fechaUltimaModificacion: new Date('2012-08-17 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000008', cifDni: '12345678W', razonSocial: 'Sergio Blanco García', nombre: 'CONSULTORÍA GESTIONES', domicilio: 'Calle Blanco Porto, 11', codigoPostal: '36004', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente Sergio Blanco García', potencial: true, personaContacto: 'Sergio Blanco', fechaUltimaModificacion: new Date('2015-06-03 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000009', cifDni: '87654321X', razonSocial: 'CONSTRUCCIONES AZULES, S.L.', nombre: 'CONSTRUCCIONES AZULES', domicilio: 'Avda. de Ourense, 8', codigoPostal: '36012', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente CONSTRUCCIONES AZULES, S.L.', potencial: false, personaContacto: 'Manuel Fernández', fechaUltimaModificacion: new Date('2005-05-17 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000010', cifDni: '12345678W', razonSocial: 'CALOR INSTALACIONES, S.L.U.', nombre: 'CALOR INSTALACIONES', domicilio: 'Calle Michelena, 55', codigoPostal: '36028', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente CALOR INSTALACIONES, S.L.U.', potencial: false, personaContacto: 'Roberto Garrido', fechaUltimaModificacion: new Date('2015-08-17 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000011', cifDni: '87654321X', razonSocial: 'CARPINTERÍA PINO, S.A.', nombre: 'CARPINTERÍA PINO', domicilio: 'Calle Echegaray, 7', codigoPostal: '36009', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente CARPINTERÍA PINO, S.A.', potencial: true, personaContacto: 'Ángel Nogueira', fechaUltimaModificacion: new Date('2016-09-07 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000012', cifDni: '12345678W', razonSocial: 'SUPERMERCADOS PIMIENTA, S.L.', nombre: 'SUPERMERCADOS PIMIENTA', domicilio: 'Avda. de Fernández Ladreda, 19', codigoPostal: '36034', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente SUPERMERCADOS PIMIENTA, S.L.', potencial: false, personaContacto: 'Borja Rivas', fechaUltimaModificacion: new Date('2011-02-15 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000013', cifDni: '87654321X', razonSocial: 'LIBRERÍA BOLÍGRAFO, S.A.', nombre: 'LIBRERÍA BOLÍGRAFO', domicilio: 'Calle Arzobispo Malvar, 32', codigoPostal: '36075', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente LIBRERÍA BOLÍGRAFO, S.A.', potencial: false, personaContacto: 'Javier Pardo', fechaUltimaModificacion: new Date('2017-11-21 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000014', cifDni: '12345678W', razonSocial: 'BAR HIELO, S.A.', nombre: 'BAR HIELO', domicilio: 'Calle Rosalía de Castro, 11', codigoPostal: '36053', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente BAR HIELO, S.A.', potencial: true, personaContacto: 'Paco Moldes', fechaUltimaModificacion: new Date('2008-08-11 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000015', cifDni: '87654321X', razonSocial: 'Lorena Campos Rodríguez', nombre: 'FLORISTERÍA AMAPOLAS', domicilio: 'Calle Sagasta, 2', codigoPostal: '36084', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente Lorena Campos Rodríguez', potencial: false, personaContacto: 'Lorena Campos', fechaUltimaModificacion: new Date('2002-03-11 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000016', cifDni: '12345678W', razonSocial: 'Eduardo Ramírez Rey', nombre: 'CONSULTORÍA ESTUDIOS', domicilio: 'Calle Blanco Porto, 25', codigoPostal: '36004', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente Eduardo Ramírez Rey', potencial: true, personaContacto: 'Eduardo Ramírez', fechaUltimaModificacion: new Date('2016-08-01 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000017', cifDni: '87654321X', razonSocial: 'CONSTRUCCIONES VERDES, S.L.', nombre: 'CONSTRUCCIONES VERDES', domicilio: 'Avda. de Vigo, 21', codigoPostal: '36001', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente CONSTRUCCIONES VERDES, S.L.', potencial: false, personaContacto: 'Rafa Pérez', fechaUltimaModificacion: new Date('2012-12-07 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000018', cifDni: '12345678W', razonSocial: 'TEMPLADO INSTALACIONES, S.L.U.', nombre: 'TEMPLADO INSTALACIONES', domicilio: 'Calle Benito Corbal, 14', codigoPostal: '36008', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente TEMPLADO INSTALACIONES, S.L.U.', potencial: false, personaContacto: 'Alfonso García', fechaUltimaModificacion: new Date('2012-05-10 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000019', cifDni: '87654321X', razonSocial: 'CARPINTERÍA ROBLE, S.A.', nombre: 'CARPINTERÍA ROBLE', domicilio: 'Calle Joaquín Costa, 22', codigoPostal: '36003', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente CARPINTERÍA ROBLE, S.A.', potencial: true, personaContacto: 'Carlos Gómez', fechaUltimaModificacion: new Date('2011-10-20 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000020', cifDni: '12345678W', razonSocial: 'SUPERMERCADOS SAL, S.L.', nombre: 'SUPERMERCADOS SAL', domicilio: 'Avda. de Lugo, 19', codigoPostal: '36002', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente SUPERMERCADOS SAL, S.L.', potencial: false, personaContacto: 'Francisco González', fechaUltimaModificacion: new Date('2008-11-29 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000021', cifDni: '87654321X', razonSocial: 'LIBRERÍA PAPEL, S.A.', nombre: 'LIBRERÍA PAPEL', domicilio: 'Calle La Estrada, 5', codigoPostal: '36005', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente LIBRERÍA PAPEL, S.A.', potencial: false, personaContacto: 'Alex Pérez', fechaUltimaModificacion: new Date('2018-03-12 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000022', cifDni: '12345678W', razonSocial: 'BAR CENTRO, S.A.', nombre: 'BAR CENTRO', domicilio: 'Calle Loureiro Crespo, 10', codigoPostal: '36004', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente BAR CENTRO, S.A.', potencial: true, personaContacto: 'Julio López', fechaUltimaModificacion: new Date('2016-04-03 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000023', cifDni: '87654321X', razonSocial: 'Patricia Martínez Sierra', nombre: 'FLORISTERÍA CLAVELES', domicilio: 'Calle Sagasta, 54', codigoPostal: '36084', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente Patricia Martínez Sierra', potencial: false, personaContacto: 'Patricia Martínez', fechaUltimaModificacion: new Date('2017-02-15 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000024', cifDni: '12345678W', razonSocial: 'Antonio Barros Mendoza', nombre: 'CONSULTORÍA DEFINITIVA', domicilio: 'Calle Blanco Porto, 5', codigoPostal: '36004', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente Antonio Barros Mendoza', potencial: true, personaContacto: 'Antonio Barros', fechaUltimaModificacion: new Date('2018-09-11 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000025', cifDni: '87654321X', razonSocial: 'CONSTRUCCIONES AMARILLAS, S.L.', nombre: 'CONSTRUCCIONES AMARILLAS', domicilio: 'Avda. de Ourense, 22', codigoPostal: '36012', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente CONSTRUCCIONES AMARILLAS, S.L.', potencial: false, personaContacto: 'Manuel Varela', fechaUltimaModificacion: new Date('2015-01-17 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000026', cifDni: '12345678W', razonSocial: 'NIEVE INSTALACIONES, S.L.U.', nombre: 'NIEVE INSTALACIONES', domicilio: 'Calle Michelena, 35', codigoPostal: '36028', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente NIEVE INSTALACIONES, S.L.U.', potencial: false, personaContacto: 'Alberto Garrido', fechaUltimaModificacion: new Date('2016-08-13 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000027', cifDni: '87654321X', razonSocial: 'CARPINTERÍA MANZANO, S.A.', nombre: 'CARPINTERÍA MANZANO', domicilio: 'Calle Echegaray, 17', codigoPostal: '36009', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente CARPINTERÍA MANZANO, S.A.', potencial: true, personaContacto: 'Nacho González', fechaUltimaModificacion: new Date('2011-05-08 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000028', cifDni: '12345678W', razonSocial: 'SUPERMERCADOS GALLETA, S.L.', nombre: 'SUPERMERCADOS GALLETA', domicilio: 'Avda. de Fernández Ladreda, 5', codigoPostal: '36034', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente SUPERMERCADOS GALLETA, S.L.', potencial: false, personaContacto: 'Pedro Rivas', fechaUltimaModificacion: new Date('2011-04-25 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000029', cifDni: '87654321X', razonSocial: 'LIBRERÍA LÁPIZ, S.A.', nombre: 'LIBRERÍA LÁPIZ', domicilio: 'Calle Arzobispo Malvar, 17', codigoPostal: '36075', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente LIBRERÍA LÁPIZ, S.A.', potencial: false, personaContacto: 'David Pardo', fechaUltimaModificacion: new Date('2006-10-20 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000030', cifDni: '12345678W', razonSocial: 'BAR TAZA, S.A.', nombre: 'BAR TAZA', domicilio: 'Calle Rosalía de Castro, 1', codigoPostal: '36053', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente BAR TAZA, S.A.', potencial: true, personaContacto: 'Jorge Moldes', fechaUltimaModificacion: new Date('2018-08-07 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000031', cifDni: '87654321X', razonSocial: 'Margarita López García', nombre: 'FLORISTERÍA GIRASOLES', domicilio: 'Calle Sagasta, 12', codigoPostal: '36084', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente Margarita López García', potencial: false, personaContacto: 'Margarita López', fechaUltimaModificacion: new Date('2008-01-25 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000032', cifDni: '12345678W', razonSocial: 'Modesto Fernández Pérez', nombre: 'CONSULTORÍA ASESORES', domicilio: 'Calle Blanco Porto, 39', codigoPostal: '36004', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente Modesto Fernández Pérez', potencial: true, personaContacto: 'Modesto Fernández', fechaUltimaModificacion: new Date('2017-04-20 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000033', cifDni: '87654321X', razonSocial: 'CONSTRUCCIONES MARRONES, S.L.', nombre: 'CONSTRUCCIONES MARRONES', domicilio: 'Avda. de Vigo, 24', codigoPostal: '36001', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente CONSTRUCCIONES MARRONES, S.L.', potencial: true, personaContacto: 'Carlos Pérez', fechaUltimaModificacion: new Date('2012-12-07 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000034', cifDni: '12345678W', razonSocial: 'TERMÓMETRO INSTALACIONES, S.L.U.', nombre: 'TERMÓMETRO INSTALACIONES', domicilio: 'Calle Benito Corbal, 4', codigoPostal: '36008', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente TERMÓMETRO INSTALACIONES, S.L.U.', potencial: false, personaContacto: 'Fernando García', fechaUltimaModificacion: new Date('2012-08-10 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000035', cifDni: '87654321X', razonSocial: 'CARPINTERÍA NOGAL, S.A.', nombre: 'CARPINTERÍA NOGAL', domicilio: 'Calle Joaquín Costa, 72', codigoPostal: '36003', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente CARPINTERÍA NOGAL, S.A.', potencial: true, personaContacto: 'Alfonso Gómez', fechaUltimaModificacion: new Date('2010-02-10 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000036', cifDni: '87654321X', razonSocial: 'SUPERMERCADOS ACEITE, S.L.', nombre: 'SUPERMERCADOS ACEITE', domicilio: 'Avda. de Lugo, 9', codigoPostal: '36002', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente SUPERMERCADOS ACEITE, S.L.', potencial: false, personaContacto: 'Pedro González', fechaUltimaModificacion: new Date('2008-11-21 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000037', cifDni: '12345678W', razonSocial: 'LIBRERÍA GOMA, S.A.', nombre: 'LIBRERÍA GOMA', domicilio: 'Calle La Estrada, 695', codigoPostal: '36005', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente LIBRERÍA GOMA, S.A.', potencial: true, personaContacto: 'Jorge Pérez', fechaUltimaModificacion: new Date('2016-10-03 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000038', cifDni: '87654321X', razonSocial: 'BAR LA BARRA, S.A.', nombre: 'BAR LA BARRA', domicilio: 'Calle Loureiro Crespo, 2', codigoPostal: '36004', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente BAR LA BARRA, S.A.', potencial: true, personaContacto: 'Rafa López', fechaUltimaModificacion: new Date('2012-03-13 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000039', cifDni: '12345678W', razonSocial: 'Rocío García Martínez', nombre: 'FLORISTERÍA NENÚFARES', domicilio: 'Calle Sagasta, 398', codigoPostal: '36084', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente Rocío García Martínez', potencial: false, personaContacto: 'Rocío García', fechaUltimaModificacion: new Date('2013-03-10 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000040', cifDni: '87654321X', razonSocial: 'Ángel Rivas Ríos', nombre: 'CONSULTORÍA INFORMÁTICA', domicilio: 'Calle Blanco Porto, 91', codigoPostal: '36004', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente Ángel Rivas Ríos', potencial: true, personaContacto: 'Ángel Rivas', fechaUltimaModificacion: new Date('2016-01-23 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000041', cifDni: '87654321X', razonSocial: 'PANADERÍA BOLLO, S.A.', nombre: 'PANADERÍA BOLLO', domicilio: 'Calle Gutiérrez Mellado, 87', codigoPostal: '36004', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente PANADERÍA BOLLO, S.A.', potencial: true, personaContacto: 'Roberto García', fechaUltimaModificacion: new Date('2018-11-03 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000042', cifDni: '87654321X', razonSocial: '2 PUNTOS, S.A.', nombre: 'FOTOGRAFÍA DIGITAL', domicilio: 'Calle Uxío Novoneira, 157', codigoPostal: '36004', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente 2 PUNTOS, S.A.', potencial: false, personaContacto: 'Alejandro Varela', fechaUltimaModificacion: new Date('2015-12-08 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000043', cifDni: '87654321X', razonSocial: 'ÑFL, S.A.', nombre: 'DEPORTES NÁUTICOS', domicilio: 'Calle Joaquín Costa, 17', codigoPostal: '36004', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente ÑFL, S.A.', potencial: false, personaContacto: 'Sergio Barros', fechaUltimaModificacion: new Date('2009-02-10 00:00:00.000') },
    { codigoEmpresa: 1, codigoCliente: '43000044', cifDni: '87654321X', razonSocial: 'Xiana Cabaleiro Montes', nombre: 'Xiana Cabaleiro Montes', domicilio: 'Calle Benito Corbal, 47', codigoPostal: '36004', municipio: 'Pontevedra', provincia: 'Pontevedra', nacion: 'España', telefono: '986 000 000', telefono2: '600 000 002', email1: 'info@dominio.com', observaciones1: 'Estas son las observaciones del cliente Xiana Cabaleiro Montes', potencial: true, personaContacto: 'Xiana Cabaleiro', fechaUltimaModificacion: new Date('2016-12-03 00:00:00.000') }
]

