const presence = new Presence({
    clientId: "794882603890638849" 
  });
  const presenceData: PresenceData = {
      largeImageKey: "largeimage"
  };
 
presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: 
      "largeimage" ,
    startTimestamp: Date.now(), 
  }; 
  const startTimestamp: number = Date.now();
  presenceData.startTimestamp = startTimestamp;
  switch (
      document.location.pathname.endsWith("/") &&
      document.location.pathname.length > 1
        ? document.location.pathname.slice(
            0,
            document.location.pathname.length - 1
        )
        : document.location.pathname 
  ) {
        case "/":
            presenceData.details = "Viewing the homepage";
            break;
        case "/cart/":
            presenceData.details = "Checking the cart";
            break;
        case "/wishlist":
            presenceData.details = "Viewing wishlist";
            break;
        case "/recent-view":
            presenceData.details = "Viewing recents";
            break;
        case "/favorite-shop":
            presenceData.details = "Viewing favorite stores";
            break;
        case "/profile":
            presenceData.details = "Viewing a profile";
            break;
        case "/rewards":
            presenceData.details = "Checking rewards";
            break;
  }

  if (presenceData.details == null) {
    presence.setTrayTitle(); 
    presence.setActivity(); 
  } else {
    presence.setActivity(presenceData);
  }
});

//credits to 1Cak author, allvzx for the idea