const getArticles = section => {
  if (!section) {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=tCrSEWLbGoY4Enmu3N67UIosvhfZKOkV`).then(
      res => checkResponse(res)
    )
  } else {
    return fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=tCrSEWLbGoY4Enmu3N67UIosvhfZKOkV`
    ).then(res => checkResponse(res))
  }
}

const checkResponse = res => {
  if (!res.ok) {
    throw `Error: ${res.statusText}`
  } else {
    return res.json()
  }
}

export default getArticles
