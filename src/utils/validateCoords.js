import Swal from 'sweetalert2';

const validateCoords = (lat, lng) => {
  if (lat < -90 || lat > 90) {
    Swal.fire({
      icon: 'error',
      title: 'Hubo un error',
      text: 'Latitud debe estar entre -90 y 90 grados',
    });
    return;
  }

  if (lng < -180 || lng > 180) {
    Swal.fire({
      icon: 'error',
      title: 'Hubo un error',
      text: 'Longitud debe estar entre -180 y 180 grados.',
    });
    return;
  }
  return true;
};

export default validateCoords;
