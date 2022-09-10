  function updateMeasures() {
    var B7 = $pizzaNumber.val();
    var B8 = $pizzaSize.val();
    var B9 = $pizzaWaterContent.val();


    var flour = round((B7 * B8)/(1 + ( B9 / 100) + 0.03 + 0.002), 1);
    var water = round((flour * B9) / 100, 1);
    var salt = round(0.03 * flour, 1);
    var yeast = round(0.002 * flour, 1);

    $flour.text(flour);
    $water.text(water);
    $salt.text(salt);
    $yeast.text(yeast);
  }