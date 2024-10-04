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
  ];
  return new Response(JSON.stringify(properties));
}
