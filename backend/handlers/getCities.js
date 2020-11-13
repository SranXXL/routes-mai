const cities = ['Москва', 'Орел', 'Чита'];

const getCities = async (ctx) => {
    ctx.body = cities;
};

export default getCities;
