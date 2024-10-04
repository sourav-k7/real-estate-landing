export async function GET(request) {
  const properties = [
    {
      id: 1,
      address: "2578 Folsom street, san francisco, CA, 94110",
      price: "$1200/month",
      bedRoomCount: Math.floor(Math.random() * 4) + 1,
      bathCount: Math.floor(Math.random() * 4) + 1,
      area: Math.floor(Math.random() * 4) + 1,
      area: Math.floor(Math.random() * 100) + 1,
      imgSrc:
        "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      address: "2578 Folsom street, san francisco, CA, 94110",
      price: "$1200/month",
      bedRoomCount: Math.floor(Math.random() * 4) + 1,
      bathCount: Math.floor(Math.random() * 4) + 1,
      area: Math.floor(Math.random() * 4) + 1,
      area: Math.floor(Math.random() * 100) + 1,
      imgSrc:
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      address: "2578 Folsom street, san francisco, CA, 94110",
      price: "$1200/month",
      bedRoomCount: Math.floor(Math.random() * 4) + 1,
      bathCount: Math.floor(Math.random() * 4) + 1,
      area: Math.floor(Math.random() * 4) + 1,
      area: Math.floor(Math.random() * 100) + 1,
      imgSrc:
        "https://images.unsplash.com/photo-1501876725168-00c445821c9e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      address: "2578 Folsom street, san francisco, CA, 94110",
      price: "$1200/month",
      bedRoomCount: Math.floor(Math.random() * 4) + 1,
      bathCount: Math.floor(Math.random() * 4) + 1,
      area: Math.floor(Math.random() * 4) + 1,
      area: Math.floor(Math.random() * 100) + 1,
      imgSrc:
        "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      address: "2578 Folsom street, san francisco, CA, 94110",
      price: "$1200/month",
      bedRoomCount: Math.floor(Math.random() * 4) + 1,
      bathCount: Math.floor(Math.random() * 4) + 1,
      area: Math.floor(Math.random() * 4) + 1,
      area: Math.floor(Math.random() * 100) + 1,
      imgSrc:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      address: "2578 Folsom street, san francisco, CA, 94110",
      price: "$1200/month",
      bedRoomCount: Math.floor(Math.random() * 4) + 1,
      bathCount: Math.floor(Math.random() * 4) + 1,
      area: Math.floor(Math.random() * 4) + 1,
      area: Math.floor(Math.random() * 100) + 1,
      imgSrc:
        "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return new Response(JSON.stringify(properties));
}
