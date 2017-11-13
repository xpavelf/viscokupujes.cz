import "whatwg-fetch"
export const GET_RECIPES = "GET_RECIPES"
const rootUrl = (__APP_MODE__ === "mob" ? 'https://viscokupujes.cz' : '')

export function getRecipes(bc) {
  return ({
    type: GET_RECIPES,
    payload: {
      promise: fetch(`${rootUrl}/api/recipes/?page=1&perPage=15&ean=${bc}`).then(resp => resp.json()),
      data: { bc }
    }
  })

}
