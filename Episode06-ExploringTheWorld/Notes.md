- Monolith Architecture

*

- Microservise Architecture

*

- Our project follows UI-microservice

* API

- Two ways to make api call

1. pageLoad -> API call -> Render
2. pageLoad -> render(UI Load) -> API call -> re-render app

- for api call
- useEffect will call after your component render
  useEffect((arrow) => {callback}, [dependency]){
  }

#### CORS
