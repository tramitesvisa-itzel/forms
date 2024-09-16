
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getFirestore, collection, addDoc, updateDoc, doc } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js';

const firebaseConfig = {
    apiKey: "AIzaSyB2YHOPydtFOFn5Sr3PXNp6H-6TM0p3Urc",
    authDomain: "tramitesvisa-itzel.firebaseapp.com",
    projectId: "tramitesvisa-itzel",
    storageBucket: "tramitesvisa-itzel.appspot.com",
    messagingSenderId: "356859229057",
    appId: "1:356859229057:web:ab3b905aaacfa2d2b86e80"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

document.getElementById('dataForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const tipo_solicitud = document.getElementById('tipo_solicitud').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('numero_telefonico').value;
    const correo = document.getElementById('correo_electronico').value;

    const fecha_ultimavisita_usa = document.getElementById('fecha_ultimavisita_usa')?.value || '';
    const duracion_en_usa = document.getElementById('duracion_en_usa')?.value || '';
    const cantidad_dias_meses = document.getElementById('cantidad_dias_meses')?.value || '';
    const foto1 = document.getElementById('imagen_frente')?.files[0];
    const foto2 = document.getElementById('imagen_reverso')?.files[0];
    // Datos Personales
    const apellido_paterno = document.getElementById('apellido_paterno')?.value || '';
    const apellido_materno = document.getElementById('apellido_materno')?.value || '';
    const nombres = document.getElementById('nombres')?.value || '';
    const fecha_nacimiento = document.getElementById('fecha_nacimiento')?.value || '';
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value || '';
    const lugar_nacimiento = document.getElementById('lugar_nacimiento')?.value || '';
    // Estado Civil
    const estado_civil = document.querySelector('input[name="estado_civil"]:checked')?.value || '';

    // Datos de Cónyuge (solo si está visible)
    const nombre_completo_conyuge = document.getElementById('nombre_completo_conyuge')?.value || '';
    const fecha_nacimiento_conyuge = document.getElementById('fecha_nacimiento_conyuge')?.value || '';
    const lugar_nacimiento_conyuge = document.getElementById('lugar_nacimiento_conyuge')?.value || '';
    // Datos del Matrimonio Anterior (solo si está visible)
    const nombre_completo_expareja = document.getElementById('nombre_completo_expareja')?.value || '';
    const fecha_union_expareja = document.getElementById('fecha_union_expareja')?.value || '';
    const lugar_nacimiento_expareja = document.getElementById('lugar_nacimiento_expareja')?.value || '';
    const motivo_separacion_expareja = document.getElementById('motivo_separacion_expareja')?.value || '';
    const fecha_divorcio_expareja = document.getElementById('fecha_divorcio_expareja')?.value || '';
    const pais_termino_matrimonio = document.getElementById('pais_termino_matrimonio')?.value || '';

    // Datos del Matrimonio Unión Libre (solo si está visible)
    const nombre_completo_conyuge_union_libre = document.getElementById('nombre_completo_conyuge_union_libre')?.value || '';
    const fecha_nacimiento_conyuge_union_libre = document.getElementById('fecha_nacimiento_conyuge_union_libre')?.value || '';
    const lugar_nacimiento_conyuge_union_libre = document.getElementById('lugar_nacimiento_conyuge_union_libre')?.value || '';

    // Datos Académicos
    const escolaridad = document.getElementById('escolaridad')?.value || '';
    const nombre_escuela = document.getElementById('nombre_escuela')?.value || '';
    const direccion_escuela = document.getElementById('direccion_escuela')?.value || '';
    const fecha_inicio_escuela = document.getElementById('fecha_inicio_escuela')?.value || '';
    const fecha_final_escuela = document.getElementById('fecha_final_escuela')?.value || '';
    
    // Empleo Actual
    const ocupacion_actual_empleo = document.getElementById('ocupacion_actual_empleo')?.value || '';
    const nombre_empresa_actual = document.getElementById('nombre_empresa_actual')?.value || '';
    const domicilio_empresas_actual = document.getElementById('domicilio_empresas_actual')?.value || '';
    const fecha_inicio_empleo_actual = document.getElementById('fecha_inicio_empleo_actual')?.value || '';
    const telefono_empres_actual = document.getElementById('telefono_empres_actual')?.value || '';
    const salario_ensual_empleo_actual = document.getElementById('salario_ensual_empleo_actual')?.value || '';
    const descripcion_actividades_a_su_cargo = document.getElementById('descripcion_actividades_a_su_cargo')?.value || '';

    // Empleo Anterior
    const nombre_empresa_anterior = document.getElementById('nombre_empresa_anterior')?.value || '';
    const domicilio_empresas_anterior = document.getElementById('domicilio_empresas_anterior')?.value || '';
    const fecha_inicio_empleo_anterior = document.getElementById('fecha_inicio_empleo_anterior')?.value || '';
    const fecha_fin_empleo_anterior = document.getElementById('fecha_fin_empleo_anterior')?.value || '';
    const descripcion_actividades_empleo_anterior = document.getElementById('descripcion_actividades_empleo_anterior')?.value || '';
    const nombre_jefe_inmediato = document.getElementById('nombre_jefe_inmediato')?.value || '';
    const telefono_jefe_inmediato = document.getElementById('telefono_jefe_inmediato')?.value || '';

      // Datos de los Padres
    const nombre_completo_padre = document.getElementById('nombre_completo_padre')?.value || '';
    const fecha_nacimiento_padre = document.getElementById('fecha_nacimiento_padre')?.value || '';
    const padre_vive_estados_unidos = document.querySelector('input[name="padre_vive_estados_unidos"]:checked')?.value || '';
    const nombre_completo_madre = document.getElementById('nombre_completo_madre')?.value || '';
    const fecha_nacimiento_madre = document.getElementById('fecha_nacimiento_madre')?.value || '';
    const madre_vive_estados_unidos = document.querySelector('input[name="madre_vive_estados_unidos"]:checked')?.value || '';
    
    // Redes Sociales
    const facebook = document.getElementById('facebook')?.value || '';
    const instagram = document.getElementById('instagram')?.value || '';


    // Información Adicional
    const tiene_familiares_estados_unidos = document.getElementById('tiene_familiares_estados_unidos')?.value || '';
    const nombre_completo_familiar_cercano = document.getElementById('nombre_completo_familiar_cercano')?.value || '';
    const numero_telefonico_familiar_cercano = document.getElementById('numero_telefonico_familiar_cercano')?.value || '';
    const domicilio_familiar_cercano = document.getElementById('domicilio_familiar_cercano')?.value || '';
    const tramitaron_visa_antes = document.getElementById('tramitaron_visa_antes')?.value || '';
    const redacta_procedimiento_realizado = document.getElementById('redacta_procedimiento_realizado')?.value || '';
    const han_visitado_estados_unidos = document.getElementById('han_visitado_estados_unidos')?.value || '';
    const fecha_visita_estados_unidos = document.getElementById('fecha_visita_estados_unidos')?.value || '';
    const han_viajado_extranjero_últimos_cinco_años = document.querySelector('input[name="han_viajado_extranjero_últimos_cinco_años"]:checked')?.value || '';
    const pais = document.getElementById('pais')?.value || '';
    const domina_ingles = document.querySelector('input[name="domina_ingles"]:checked')?.value || '';

    const foto3 = document.getElementById('acta_nacimiento')?.files[0];
    const foto4 = document.getElementById('pasaporte')?.files[0];
    const foto5 = document.getElementById('ine')?.files[0];
    const archivo = document.getElementById('archivo')?.files[0];
    const check = document.getElementById('check').checked;

    const fechaHoraActual = new Date().toISOString();
    document.getElementById('fecha_hora').value = fechaHoraActual;

    const docRef = await addDoc(collection(db, 'formularios'), {
        tipo_solicitud,
        nombre,
        telefono,
        correo,
        fecha_ultimavisita_usa,
        duracion_en_usa,
        cantidad_dias_meses,
        // Datos Personales
        apellido_paterno,
        apellido_materno,
        nombres,
        fecha_nacimiento,
        sexo,
        lugar_nacimiento,
        // Estado Civil
        estado_civil,
        // Datos de Cónyuge (solo si está visible)
        nombre_completo_conyuge,
        fecha_nacimiento_conyuge,
        lugar_nacimiento_conyuge,

        

        // Datos del Matrimonio Anterior
        nombre_completo_expareja,
        fecha_union_expareja,
        lugar_nacimiento_expareja,
        motivo_separacion_expareja,
        fecha_divorcio_expareja,
        pais_termino_matrimonio,

        // Datos de Cónyuge Union Libre(solo si está visible)
        nombre_completo_conyuge_union_libre,
        fecha_nacimiento_conyuge_union_libre,
        lugar_nacimiento_conyuge_union_libre,

        // Datos Académicos
        escolaridad,
        nombre_escuela,
        direccion_escuela,
        fecha_inicio_escuela,
        fecha_final_escuela,
        // Empleo Actual
        ocupacion_actual_empleo,
        nombre_empresa_actual,
        domicilio_empresas_actual,
        fecha_inicio_empleo_actual,
        telefono_empres_actual,
        salario_ensual_empleo_actual,
        descripcion_actividades_a_su_cargo,
        // Empleo Anterior
        nombre_empresa_anterior,
        domicilio_empresas_anterior,
        domicilio_empresas_anterior,
        fecha_inicio_empleo_anterior,
        fecha_fin_empleo_anterior,
        descripcion_actividades_empleo_anterior,
        nombre_jefe_inmediato,
        telefono_jefe_inmediato,
        // Datos de los Padres
        nombre_completo_padre,
        fecha_nacimiento_padre,
        padre_vive_estados_unidos,
        
        nombre_completo_madre,
        fecha_nacimiento_madre,
        madre_vive_estados_unidos,
        // Redes Sociales
        facebook,
        instagram,
      
        // Información Adicional
        tiene_familiares_estados_unidos,
        nombre_completo_familiar_cercano,
        numero_telefonico_familiar_cercano,
        domicilio_familiar_cercano,
        tramitaron_visa_antes,
        redacta_procedimiento_realizado,
        han_visitado_estados_unidos,
        fecha_visita_estados_unidos,
        han_viajado_extranjero_últimos_cinco_años,
        pais,
        domina_ingles,

        fecha_hora: fechaHoraActual,
        check
    });

    const storageRef = ref(storage);

    if (foto1) {
        const foto1Ref = ref(storageRef, `fotos/imagen_frente/${foto1.name}`);
        await uploadBytes(foto1Ref, foto1);
        const foto1URL = await getDownloadURL(foto1Ref);
        await updateDoc(docRef, { foto1URL });
    }

    if (foto2) {
        const foto2Ref = ref(storageRef, `fotos/imagen_reverso/${foto2.name}`);
        await uploadBytes(foto2Ref, foto2);
        const foto2URL = await getDownloadURL(foto2Ref);
        await updateDoc(docRef, { foto2URL });
    }

    if (foto3) {
        const foto3Ref = ref(storageRef, `documentos/acta_nacimiento/${foto3.name}`);
        await uploadBytes(foto3Ref, foto3);
        const foto3URL = await getDownloadURL(foto3Ref);
        await updateDoc(docRef, { foto3URL });
    }

    if (foto4) {
        const foto4Ref = ref(storageRef, `documentos/pasaporte/${foto4.name}`);
        await uploadBytes(foto4Ref, foto4);
        const foto4URL = await getDownloadURL(foto4Ref);
        await updateDoc(docRef, { foto4URL });
    }

    if (foto5) {
        const foto5Ref = ref(storageRef, `documentos/ine/${foto5.name}`);
        await uploadBytes(foto5Ref, foto5);
        const foto5URL = await getDownloadURL(foto5Ref);
        await updateDoc(docRef, { foto5URL });
    }

    if (archivo) {
        const archivoRef = ref(storageRef, `documentos/otros/${archivo.name}`);
        await uploadBytes(archivoRef, archivo);
        const archivoURL = await getDownloadURL(archivoRef);
        await updateDoc(docRef, { archivoURL });
    }

    alert('Formulario enviado y archivos cargados exitosamente.');
    // Limpiar el formulario y el campo de fecha y hora
    document.getElementById('dataForm').reset();
    document.getElementById('fecha_hora').value = ''; // Limpia el campo de fecha y hora

    // Redirigir a otra página web
    window.location.href = 'https://tramitesvisa-itzel.github.io/travel-solutions.pag/';

});




