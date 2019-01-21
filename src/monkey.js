function monkeyVertices() {
  const v = [
    [0.498320, 0.538018, 1.032525],
    [-0.376680, 0.538018, 1.032525],
    [0.560820, 0.467705, 0.954400],
    [-0.439180, 0.467705, 0.954400],
    [0.607695, 0.428643, 0.845025],
    [-0.486055, 0.428643, 0.845025],
    [0.412383, 0.350518, 0.884088],
    [-0.290742, 0.350518, 0.884088],
    [0.412383, 0.405205, 0.985650],
    [-0.290742, 0.405205, 0.985650],
    [0.412383, 0.506768, 1.048150],
    [-0.290742, 0.506768, 1.048150],
    [0.334258, 0.538018, 1.063775],
    [-0.212617, 0.538018, 1.063775],
    [0.263945, 0.467705, 1.009088],
    [-0.142305, 0.467705, 1.009088],
    [0.217070, 0.428643, 0.915338],
    [-0.095430, 0.428643, 0.915338],
    [0.138945, 0.616143, 0.923150],
    [-0.017305, 0.616143, 0.923150],
    [0.201445, 0.616143, 1.009088],
    [-0.079805, 0.616143, 1.009088],
    [0.303008, 0.616143, 1.063775],
    [-0.181367, 0.616143, 1.063775],
    [0.334258, 0.702080, 1.063775],
    [-0.212617, 0.702080, 1.063775],
    [0.263945, 0.764580, 1.009088],
    [-0.142305, 0.764580, 1.009088],
    [0.217070, 0.811455, 0.915338],
    [-0.095430, 0.811455, 0.915338],
    [0.412383, 0.889580, 0.884088],
    [-0.290742, 0.889580, 0.884088],
    [0.412383, 0.827080, 0.985650],
    [-0.290742, 0.827080, 0.985650],
    [0.412383, 0.733330, 1.048150],
    [-0.290742, 0.733330, 1.048150],
    [0.498320, 0.702080, 1.032525],
    [-0.376680, 0.702080, 1.032525],
    [0.560820, 0.764580, 0.954400],
    [-0.439180, 0.764580, 0.954400],
    [0.607695, 0.811455, 0.845025],
    [-0.486055, 0.811455, 0.845025],
    [0.685820, 0.616143, 0.829400],
    [-0.564180, 0.616143, 0.829400],
    [0.623320, 0.616143, 0.938775],
    [-0.501680, 0.616143, 0.938775],
    [0.529570, 0.616143, 1.024713],
    [-0.407930, 0.616143, 1.024713],
    [0.537383, 0.616143, 1.040338],
    [-0.415742, 0.616143, 1.040338],
    [0.506133, 0.709893, 1.048150],
    [-0.384492, 0.709893, 1.048150],
    [0.412383, 0.748955, 1.071588],
    [-0.290742, 0.748955, 1.071588],
    [0.326445, 0.709893, 1.087213],
    [-0.204805, 0.709893, 1.087213],
    [0.287383, 0.616143, 1.087213],
    [-0.165742, 0.616143, 1.087213],
    [0.326445, 0.530205, 1.087213],
    [-0.204805, 0.530205, 1.087213],
    [0.412383, 0.616143, 1.095025],
    [-0.290742, 0.616143, 1.095025],
    [0.412383, 0.491143, 1.071588],
    [-0.290742, 0.491143, 1.071588],
    [0.506133, 0.530205, 1.048150],
    [-0.384492, 0.530205, 1.048150],
    [0.060820, 0.803643, 1.009088],
    [0.060820, 0.725518, 1.087213],
    [0.060820, -0.305732, 1.001275],
    [0.060820, 0.053643, 1.048150],
    [0.060820, 0.186455, 1.063775],
    [0.060820, -0.399482, 0.985650],
    [0.060820, 0.780205, 0.868463],
    [0.060820, 0.944268, 0.837213],
    [0.060820, 1.272393, -0.279975],
    [0.060820, 0.936455, -0.584662],
    [0.060820, 0.444268, -0.561225],
    [0.060820, -0.008857, -0.084662],
    [0.263945, 0.186455, 0.829400],
    [-0.142305, 0.186455, 0.829400],
    [0.373320, -0.063545, 0.837213],
    [-0.251680, -0.063545, 0.837213],
    [0.412383, -0.321357, 0.837213],
    [-0.290742, -0.321357, 0.837213],
    [0.428008, -0.516670, 0.798150],
    [-0.306367, -0.516670, 0.798150],
    [0.388945, -0.571357, 0.790338],
    [-0.267305, -0.571357, 0.790338],
    [0.240508, -0.594795, 0.821588],
    [-0.118867, -0.594795, 0.821588],
    [0.060820, -0.610420, 0.845025],
    [0.498320, 0.233330, 0.798150],
    [-0.376680, 0.233330, 0.798150],
    [0.693633, 0.334893, 0.805963],
    [-0.571992, 0.334893, 0.805963],
    [0.888945, 0.522393, 0.712213],
    [-0.767305, 0.522393, 0.712213],
    [0.920195, 0.803643, 0.860650],
    [-0.798555, 0.803643, 0.860650],
    [0.771758, 0.858330, 0.891900],
    [-0.650117, 0.858330, 0.891900],
    [0.553008, 0.975518, 0.954400],
    [-0.431367, 0.975518, 0.954400],
    [0.381133, 1.131768, 1.001275],
    [-0.259492, 1.131768, 1.001275],
    [0.217070, 1.092705, 1.024713],
    [-0.095430, 1.092705, 1.024713],
    [0.123320, 0.866143, 1.016900],
    [-0.001680, 0.866143, 1.016900],
    [0.224883, 0.788018, 1.040338],
    [-0.103242, 0.788018, 1.040338],
    [0.185820, 0.678643, 1.032525],
    [-0.064180, 0.678643, 1.032525],
    [0.263945, 0.467705, 1.009088],
    [-0.142305, 0.467705, 1.009088],
    [0.435820, 0.389580, 0.970025],
    [-0.314180, 0.389580, 0.970025],
    [0.553008, 0.436455, 0.938775],
    [-0.431367, 0.436455, 0.938775],
    [0.685820, 0.561455, 0.915338],
    [-0.564180, 0.561455, 0.915338],
    [0.701445, 0.670830, 0.915338],
    [-0.579805, 0.670830, 0.915338],
    [0.662383, 0.748955, 0.930963],
    [-0.540742, 0.748955, 0.930963],
    [0.490508, 0.811455, 0.985650],
    [-0.368867, 0.811455, 0.985650],
    [0.310820, 0.842705, 1.024713],
    [-0.189180, 0.842705, 1.024713],
    [0.060820, -0.391670, 1.001275],
    [0.170195, -0.344795, 1.001275],
    [-0.048555, -0.344795, 1.001275],
    [0.178008, -0.461982, 0.977838],
    [-0.056367, -0.461982, 0.977838],
    [0.123320, -0.508857, 0.962213],
    [-0.001680, -0.508857, 0.962213],
    [0.060820, -0.516670, 0.954400],
    [0.060820, 0.178643, 1.016900],
    [0.060820, 0.233330, 1.009088],
    [0.162383, 0.225518, 1.009088],
    [-0.040742, 0.225518, 1.009088],
    [0.185820, 0.147393, 1.016900],
    [-0.064180, 0.147393, 1.016900],
    [0.146758, 0.084893, 1.009088],
    [-0.025117, 0.084893, 1.009088],
    [0.459258, 0.327080, 0.938775],
    [-0.337617, 0.327080, 0.938775],
    [0.678008, 0.428643, 0.891900],
    [-0.556367, 0.428643, 0.891900],
    [0.787383, 0.577080, 0.868463],
    [-0.665742, 0.577080, 0.868463],
    [0.803008, 0.748955, 0.923150],
    [-0.681367, 0.748955, 0.923150],
    [0.748320, 0.788018, 0.993463],
    [-0.626680, 0.788018, 0.993463],
    [0.498320, 0.920830, 1.063775],
    [-0.376680, 0.920830, 1.063775],
    [0.373320, 1.014580, 1.102838],
    [-0.251680, 1.014580, 1.102838],
    [0.263945, 0.991143, 1.118463],
    [-0.142305, 0.991143, 1.118463],
    [0.162383, 0.803643, 1.110650],
    [-0.040742, 0.803643, 1.110650],
    [0.185820, 0.272393, 1.079400],
    [-0.064180, 0.272393, 1.079400],
    [0.271758, -0.071357, 0.977838],
    [-0.150117, -0.071357, 0.977838],
    [0.310820, -0.329170, 0.954400],
    [-0.189180, -0.329170, 0.954400],
    [0.326445, -0.446357, 0.930963],
    [-0.204805, -0.446357, 0.930963],
    [0.295195, -0.540107, 0.899713],
    [-0.173555, -0.540107, 0.899713],
    [0.224883, -0.555732, 0.899713],
    [-0.103242, -0.555732, 0.899713],
    [0.060820, -0.571357, 0.907525],
    [0.060820, 0.420830, 0.993463],
    [0.060820, 0.584893, 1.032525],
    [0.388945, 0.850518, 1.009088],
    [-0.267305, 0.850518, 1.009088],
    [0.224883, 0.514580, 1.016900],
    [-0.103242, 0.514580, 1.016900],
    [0.193633, 0.584893, 1.024713],
    [-0.071992, 0.584893, 1.024713],
    [0.178008, -0.313545, 1.001275],
    [-0.056367, -0.313545, 1.001275],
    [0.138945, -0.071357, 1.016900],
    [-0.017305, -0.071357, 1.016900],
    [0.060820, -0.071357, 1.016900],
    [0.060820, 0.045830, 1.009088],
    [0.154570, 0.100518, 1.048150],
    [-0.032930, 0.100518, 1.048150],
    [0.193633, 0.147393, 1.063775],
    [-0.071992, 0.147393, 1.063775],
    [0.170195, 0.241143, 1.048150],
    [-0.048555, 0.241143, 1.048150],
    [0.099883, 0.248955, 1.048150],
    [0.021758, 0.248955, 1.048150],
    [0.060820, 0.170830, 1.095025],
    [0.107695, 0.225518, 1.079400],
    [0.013945, 0.225518, 1.079400],
    [0.154570, 0.217705, 1.079400],
    [-0.032930, 0.217705, 1.079400],
    [0.170195, 0.147393, 1.095025],
    [-0.048555, 0.147393, 1.095025],
    [0.138945, 0.123955, 1.071588],
    [-0.017305, 0.123955, 1.071588],
    [0.060820, 0.084893, 1.071588],
    [0.318633, 0.061455, 0.821588],
    [-0.196992, 0.061455, 0.821588],
    [0.224883, 0.131768, 0.977838],
    [-0.103242, 0.131768, 0.977838],
    [0.240508, 0.061455, 0.977838],
    [-0.118867, 0.061455, 0.977838],
    [0.295195, 0.123955, 0.821588],
    [-0.173555, 0.123955, 0.821588],
    [0.060820, -0.501045, 0.954400],
    [0.107695, -0.493232, 0.954400],
    [0.013945, -0.493232, 0.954400],
    [0.154570, -0.446357, 0.977838],
    [-0.032930, -0.446357, 0.977838],
    [0.154570, -0.368232, 0.993463],
    [-0.032930, -0.368232, 0.993463],
    [0.060820, -0.407295, 0.923150],
    [0.154570, -0.376045, 0.930963],
    [-0.032930, -0.376045, 0.930963],
    [0.154570, -0.438545, 0.907525],
    [-0.032930, -0.438545, 0.907525],
    [0.107695, -0.477607, 0.899713],
    [0.013945, -0.477607, 0.899713],
    [0.060820, -0.485420, 0.899713],
    [0.232695, 0.592705, 1.048150],
    [-0.111055, 0.592705, 1.048150],
    [0.248320, 0.530205, 1.040338],
    [-0.126680, 0.530205, 1.040338],
    [0.396758, 0.803643, 1.024713],
    [-0.275117, 0.803643, 1.024713],
    [0.334258, 0.795830, 1.040338],
    [-0.212617, 0.795830, 1.040338],
    [0.482695, 0.772393, 1.040338],
    [-0.361055, 0.772393, 1.040338],
    [0.623320, 0.725518, 0.962213],
    [-0.501680, 0.725518, 0.962213],
    [0.646758, 0.663018, 0.954400],
    [-0.525117, 0.663018, 0.954400],
    [0.638945, 0.569268, 0.946588],
    [-0.517305, 0.569268, 0.946588],
    [0.537383, 0.475518, 0.985650],
    [-0.415742, 0.475518, 0.985650],
    [0.435820, 0.436455, 1.009088],
    [-0.314180, 0.436455, 1.009088],
    [0.287383, 0.483330, 1.048150],
    [-0.165742, 0.483330, 1.048150],
    [0.240508, 0.670830, 1.048150],
    [-0.118867, 0.670830, 1.048150],
    [0.271758, 0.748955, 1.048150],
    [-0.150117, 0.748955, 1.048150],
    [0.295195, 0.733330, 1.024713],
    [-0.173555, 0.733330, 1.024713],
    [0.256133, 0.670830, 1.024713],
    [-0.134492, 0.670830, 1.024713],
    [0.303008, 0.498955, 1.024713],
    [-0.181367, 0.498955, 1.024713],
    [0.435820, 0.459893, 0.993463],
    [-0.314180, 0.459893, 0.993463],
    [0.521758, 0.491143, 0.970025],
    [-0.400117, 0.491143, 0.970025],
    [0.607695, 0.584893, 0.938775],
    [-0.486055, 0.584893, 0.938775],
    [0.615508, 0.655205, 0.938775],
    [-0.493867, 0.655205, 0.938775],
    [0.592070, 0.709893, 0.946588],
    [-0.470430, 0.709893, 0.946588],
    [0.474883, 0.764580, 1.016900],
    [-0.353242, 0.764580, 1.016900],
    [0.342070, 0.772393, 1.032525],
    [-0.220430, 0.772393, 1.032525],
    [0.396758, 0.780205, 1.016900],
    [-0.275117, 0.780205, 1.016900],
    [0.263945, 0.545830, 1.016900],
    [-0.142305, 0.545830, 1.016900],
    [0.256133, 0.600518, 1.016900],
    [-0.134492, 0.600518, 1.016900],
    [0.170195, 0.834893, 0.876275],
    [-0.048555, 0.834893, 0.876275],
    [0.256133, 1.038018, 0.884088],
    [-0.134492, 1.038018, 0.884088],
    [0.396758, 1.061455, 0.860650],
    [-0.275117, 1.061455, 0.860650],
    [0.545195, 0.928643, 0.821588],
    [-0.423555, 0.928643, 0.821588],
    [0.740508, 0.827080, 0.759088],
    [-0.618867, 0.827080, 0.759088],
    [0.857695, 0.780205, 0.727838],
    [-0.736055, 0.780205, 0.727838],
    [0.834258, 0.538018, 0.641900],
    [-0.712617, 0.538018, 0.641900],
    [0.662383, 0.373955, 0.680963],
    [-0.540742, 0.373955, 0.680963],
    [0.498320, 0.280205, 0.735650],
    [-0.376680, 0.280205, 0.735650],
    [0.060820, 1.272393, 0.555963],
    [0.060820, 1.358330, 0.188775],
    [0.060820, 0.178643, -0.404975],
    [0.060820, -0.086982, 0.454400],
    [0.060820, -0.602607, 0.727838],
    [0.060820, -0.430732, 0.610650],
    [0.060820, -0.196357, 0.587213],
    [0.060820, -0.110420, 0.548150],
    [0.912383, 0.608330, 0.321588],
    [-0.790742, 0.608330, 0.321588],
    [0.920195, 0.694268, 0.220025],
    [-0.798555, 0.694268, 0.220025],
    [0.834258, 0.639580, -0.170600],
    [-0.712617, 0.639580, -0.170600],
    [0.521758, 0.811455, -0.436225],
    [-0.400117, 0.811455, -0.436225],
    [0.795195, 0.327080, 0.337213],
    [-0.673555, 0.327080, 0.337213],
    [0.654570, 0.248955, 0.102838],
    [-0.532930, 0.248955, 0.102838],
    [0.701445, 0.366143, -0.162787],
    [-0.579805, 0.366143, -0.162787],
    [0.396758, 0.428643, -0.397162],
    [-0.275117, 0.428643, -0.397162],
    [0.295195, 0.022393, 0.673150],
    [-0.173555, 0.022393, 0.673150],
    [0.240508, -0.040107, 0.524713],
    [-0.118867, -0.040107, 0.524713],
    [0.349883, -0.336982, 0.649713],
    [-0.228242, -0.336982, 0.649713],
    [0.310820, -0.126045, 0.657525],
    [-0.189180, -0.126045, 0.657525],
    [0.388945, -0.540107, 0.665338],
    [-0.267305, -0.540107, 0.665338],
    [0.201445, -0.383857, 0.634088],
    [-0.079805, -0.383857, 0.634088],
    [0.185820, -0.165107, 0.626275],
    [-0.064180, -0.165107, 0.626275],
    [0.224883, -0.571357, 0.704400],
    [-0.103242, -0.571357, 0.704400],
    [0.279570, 0.092705, 0.696588],
    [-0.157930, 0.092705, 0.696588],
    [0.271758, 0.147393, 0.735650],
    [-0.150117, 0.147393, 0.735650],
    [0.263945, 0.202080, 0.766900],
    [-0.142305, 0.202080, 0.766900],
    [0.271758, -0.016670, 0.430963],
    [-0.150117, -0.016670, 0.430963],
    [0.357695, 0.061455, 0.001275],
    [-0.236055, 0.061455, 0.001275],
    [0.404570, 0.225518, -0.272162],
    [-0.282930, 0.225518, -0.272162],
    [0.513945, 1.241143, -0.115912],
    [-0.392305, 1.241143, -0.115912],
    [0.513945, 1.303643, 0.196588],
    [-0.392305, 1.303643, 0.196588],
    [0.513945, 1.225518, 0.501275],
    [-0.392305, 1.225518, 0.501275],
    [0.521758, 0.897393, 0.696588],
    [-0.400117, 0.897393, 0.696588],
    [0.787383, 0.780205, 0.602838],
    [-0.665742, 0.780205, 0.602838],
    [0.693633, 0.827080, 0.548150],
    [-0.571992, 0.827080, 0.548150],
    [0.701445, 1.077080, 0.321588],
    [-0.579805, 1.077080, 0.321588],
    [0.857695, 0.936455, 0.391900],
    [-0.736055, 0.936455, 0.391900],
    [0.857695, 0.991143, 0.149713],
    [-0.736055, 0.991143, 0.149713],
    [0.701445, 1.123955, 0.071588],
    [-0.579805, 1.123955, 0.071588],
    [0.701445, 1.053643, -0.178412],
    [-0.579805, 1.053643, -0.178412],
    [0.857695, 0.913018, -0.092475],
    [-0.736055, 0.913018, -0.092475],
    [0.678008, 0.702080, -0.319037],
    [-0.556367, 0.702080, -0.319037],
    [0.545195, 0.397393, -0.279975],
    [-0.423555, 0.397393, -0.279975],
    [0.881133, 0.702080, 0.063775],
    [-0.759492, 0.702080, 0.063775],
    [0.467070, 0.202080, 0.415338],
    [-0.345430, 0.202080, 0.415338],
    [0.490508, 0.178643, 0.055963],
    [-0.368867, 0.178643, 0.055963],
    [0.951445, 0.780205, 0.032525],
    [-0.829805, 0.780205, 0.032525],
    [0.834258, 0.233330, 0.141900],
    [-0.712617, 0.233330, 0.141900],
    [1.099883, 0.272393, -0.061225],
    [-0.978242, 0.272393, -0.061225],
    [1.342070, 0.428643, -0.162787],
    [-1.220430, 0.428643, -0.162787],
    [1.412383, 0.694268, -0.154975],
    [-1.290742, 0.694268, -0.154975],
    [1.295195, 0.881768, -0.154975],
    [-1.173555, 0.881768, -0.154975],
    [1.084258, 0.850518, -0.045600],
    [-0.962617, 0.850518, -0.045600],
    [1.076445, 0.788018, -0.022162],
    [-0.954805, 0.788018, -0.022162],
    [1.248320, 0.811455, -0.123725],
    [-1.126680, 0.811455, -0.123725],
    [1.326445, 0.663018, -0.139350],
    [-1.204805, 0.663018, -0.139350],
    [1.271758, 0.452080, -0.139350],
    [-1.150117, 0.452080, -0.139350],
    [1.092070, 0.334893, -0.037787],
    [-0.970430, 0.334893, -0.037787],
    [0.888945, 0.303643, 0.134088],
    [-0.767305, 0.303643, 0.134088],
    [0.982695, 0.733330, 0.048150],
    [-0.861055, 0.733330, 0.048150],
    [1.006133, 0.678643, -0.022162],
    [-0.884492, 0.678643, -0.022162],
    [0.943633, 0.350518, 0.055963],
    [-0.821992, 0.350518, 0.055963],
    [1.099883, 0.373955, -0.100287],
    [-0.978242, 0.373955, -0.100287],
    [1.248320, 0.467705, -0.178412],
    [-1.126680, 0.467705, -0.178412],
    [1.295195, 0.623955, -0.178412],
    [-1.173555, 0.623955, -0.178412],
    [1.232695, 0.733330, -0.170600],
    [-1.111055, 0.733330, -0.170600],
    [1.084258, 0.717705, -0.092475],
    [-0.962617, 0.717705, -0.092475],
    [0.904570, 0.663018, 0.055963],
    [-0.782930, 0.663018, 0.055963],
    [0.896758, 0.545830, -0.006537],
    [-0.775117, 0.545830, -0.006537],
    [0.818633, 0.467705, -0.006537],
    [-0.696992, 0.467705, -0.006537],
    [0.881133, 0.459893, -0.006537],
    [-0.759492, 0.459893, -0.006537],
    [0.904570, 0.389580, -0.006537],
    [-0.782930, 0.389580, -0.006537],
    [0.873320, 0.358330, -0.006537],
    [-0.751680, 0.358330, -0.006537],
    [0.787383, 0.373955, 0.196588],
    [-0.665742, 0.373955, 0.196588],
    [0.779570, 0.350518, 0.095025],
    [-0.657930, 0.350518, 0.095025],
    [0.779570, 0.413018, 0.079400],
    [-0.657930, 0.413018, 0.079400],
    [0.857695, 0.577080, 0.055963],
    [-0.736055, 0.577080, 0.055963],
    [0.951445, 0.616143, 0.001275],
    [-0.829805, 0.616143, 0.001275],
    [0.951445, 0.608330, -0.053412],
    [-0.829805, 0.608330, -0.053412],
    [0.873320, 0.358330, -0.053412],
    [-0.751680, 0.358330, -0.053412],
    [0.912383, 0.389580, -0.053412],
    [-0.790742, 0.389580, -0.053412],
    [0.888945, 0.452080, -0.053412],
    [-0.767305, 0.452080, -0.053412],
    [0.826445, 0.467705, -0.053412],
    [-0.704805, 0.467705, -0.053412],
    [0.904570, 0.545830, -0.053412],
    [-0.782930, 0.545830, -0.053412],
    [1.099883, 0.702080, -0.147162],
    [-0.978242, 0.702080, -0.147162],
    [1.248320, 0.717705, -0.217475],
    [-1.126680, 0.717705, -0.217475],
    [1.318633, 0.616143, -0.225287],
    [-1.196992, 0.616143, -0.225287],
    [1.271758, 0.459893, -0.217475],
    [-1.150117, 0.459893, -0.217475],
    [1.107695, 0.373955, -0.154975],
    [-0.986055, 0.373955, -0.154975],
    [0.943633, 0.358330, 0.001275],
    [-0.821992, 0.358330, 0.001275],
    [1.013945, 0.663018, -0.076850],
    [-0.892305, 0.663018, -0.076850],
    [0.951445, 0.483330, -0.061225],
    [-0.829805, 0.483330, -0.061225],
    [0.998320, 0.436455, -0.069037],
    [-0.876680, 0.436455, -0.069037],
    [1.060820, 0.498955, -0.100287],
    [-0.939180, 0.498955, -0.100287],
    [1.021758, 0.545830, -0.084662],
    [-0.900117, 0.545830, -0.084662],
    [1.076445, 0.608330, -0.108100],
    [-0.954805, 0.608330, -0.108100],
    [1.115508, 0.561455, -0.115912],
    [-0.993867, 0.561455, -0.115912],
    [1.170195, 0.584893, -0.123725],
    [-1.048555, 0.584893, -0.123725],
    [1.146758, 0.647393, -0.123725],
    [-1.025117, 0.647393, -0.123725],
    [1.084258, 0.811455, -0.217475],
    [-0.962617, 0.811455, -0.217475],
    [1.310820, 0.842705, -0.279975],
    [-1.189180, 0.842705, -0.279975],
    [1.428008, 0.670830, -0.233100],
    [-1.306367, 0.670830, -0.233100],
    [1.373320, 0.428643, -0.264350],
    [-1.251680, 0.428643, -0.264350],
    [1.099883, 0.288018, -0.225287],
    [-0.978242, 0.288018, -0.225287],
    [0.849883, 0.248955, -0.061225],
    [-0.728242, 0.248955, -0.061225],
    [0.920195, 0.756768, -0.115912],
    [-0.798555, 0.756768, -0.115912],
  ];
  const f = [
    [47, 3, 45],
    [4, 48, 46],
    [45, 5, 43],
    [6, 46, 44],
    [3, 7, 5],
    [8, 4, 6],
    [1, 9, 3],
    [10, 2, 4],
    [11, 15, 9],
    [16, 12, 10],
    [9, 17, 7],
    [18, 10, 8],
    [15, 19, 17],
    [20, 16, 18],
    [13, 21, 15],
    [22, 14, 16],
    [23, 27, 21],
    [28, 24, 22],
    [21, 29, 19],
    [30, 22, 20],
    [27, 31, 29],
    [32, 28, 30],
    [25, 33, 27],
    [34, 26, 28],
    [35, 39, 33],
    [40, 36, 34],
    [33, 41, 31],
    [42, 34, 32],
    [39, 43, 41],
    [44, 40, 42],
    [37, 45, 39],
    [46, 38, 40],
    [47, 51, 49],
    [52, 48, 50],
    [37, 53, 51],
    [54, 38, 52],
    [35, 55, 53],
    [56, 36, 54],
    [25, 57, 55],
    [58, 26, 56],
    [23, 59, 57],
    [60, 24, 58],
    [13, 63, 59],
    [64, 14, 60],
    [11, 65, 63],
    [66, 12, 64],
    [1, 49, 65],
    [50, 2, 66],
    [61, 65, 49],
    [50, 66, 62],
    [63, 65, 61],
    [62, 66, 64],
    [61, 59, 63],
    [64, 60, 62],
    [61, 57, 59],
    [60, 58, 62],
    [61, 55, 57],
    [58, 56, 62],
    [61, 53, 55],
    [56, 54, 62],
    [61, 51, 53],
    [54, 52, 62],
    [61, 49, 51],
    [52, 50, 62],
    [89, 176, 91],
    [176, 90, 91],
    [87, 174, 89],
    [175, 88, 90],
    [85, 172, 87],
    [173, 86, 88],
    [83, 170, 85],
    [171, 84, 86],
    [81, 168, 83],
    [169, 82, 84],
    [79, 146, 164],
    [147, 80, 165],
    [92, 148, 146],
    [149, 93, 147],
    [94, 150, 148],
    [151, 95, 149],
    [96, 152, 150],
    [153, 97, 151],
    [98, 154, 152],
    [155, 99, 153],
    [100, 156, 154],
    [157, 101, 155],
    [102, 158, 156],
    [159, 103, 157],
    [104, 160, 158],
    [161, 105, 159],
    [106, 162, 160],
    [163, 107, 161],
    [108, 68, 162],
    [68, 109, 163],
    [110, 160, 162],
    [161, 111, 163],
    [128, 158, 160],
    [159, 129, 161],
    [126, 158, 179],
    [159, 127, 180],
    [124, 156, 126],
    [157, 125, 127],
    [122, 154, 124],
    [155, 123, 125],
    [120, 152, 122],
    [153, 121, 123],
    [118, 150, 120],
    [151, 119, 121],
    [116, 148, 118],
    [149, 117, 119],
    [114, 146, 116],
    [147, 115, 117],
    [114, 177, 164],
    [177, 115, 165],
    [110, 68, 112],
    [68, 111, 113],
    [112, 178, 183],
    [178, 113, 184],
    [177, 183, 178],
    [184, 177, 178],
    [135, 176, 174],
    [176, 136, 175],
    [133, 174, 172],
    [175, 134, 173],
    [131, 172, 170],
    [173, 132, 171],
    [166, 185, 168],
    [186, 167, 169],
    [131, 168, 185],
    [169, 132, 186],
    [144, 189, 187],
    [189, 145, 188],
    [185, 189, 69],
    [189, 186, 69],
    [130, 185, 69],
    [186, 130, 69],
    [142, 191, 144],
    [192, 143, 145],
    [140, 193, 142],
    [194, 141, 143],
    [139, 195, 140],
    [196, 139, 141],
    [138, 197, 139],
    [198, 138, 139],
    [190, 191, 70],
    [192, 190, 70],
    [70, 206, 208],
    [207, 70, 208],
    [71, 200, 197],
    [201, 71, 198],
    [197, 202, 195],
    [203, 198, 196],
    [195, 204, 193],
    [205, 196, 194],
    [193, 206, 191],
    [207, 194, 192],
    [199, 202, 200],
    [203, 199, 201],
    [199, 206, 204],
    [207, 199, 205],
    [139, 164, 177],
    [165, 139, 177],
    [140, 211, 164],
    [212, 141, 165],
    [142, 213, 211],
    [214, 143, 212],
    [144, 166, 213],
    [167, 145, 214],
    [81, 213, 166],
    [214, 82, 167],
    [209, 211, 213],
    [212, 210, 214],
    [79, 211, 215],
    [212, 80, 216],
    [131, 72, 222],
    [72, 132, 223],
    [133, 222, 220],
    [223, 134, 221],
    [135, 220, 218],
    [221, 136, 219],
    [137, 218, 217],
    [219, 137, 217],
    [217, 229, 231],
    [230, 217, 231],
    [218, 227, 229],
    [228, 219, 230],
    [220, 225, 227],
    [226, 221, 228],
    [222, 224, 225],
    [224, 223, 226],
    [224, 229, 225],
    [230, 224, 226],
    [225, 229, 227],
    [228, 230, 226],
    [183, 234, 232],
    [235, 184, 233],
    [112, 232, 254],
    [233, 113, 255],
    [110, 254, 256],
    [255, 111, 257],
    [181, 252, 234],
    [253, 182, 235],
    [114, 250, 252],
    [251, 115, 253],
    [116, 248, 250],
    [249, 117, 251],
    [118, 246, 248],
    [247, 119, 249],
    [120, 244, 246],
    [245, 121, 247],
    [122, 242, 244],
    [243, 123, 245],
    [124, 240, 242],
    [241, 125, 243],
    [126, 236, 240],
    [237, 127, 241],
    [179, 238, 236],
    [239, 180, 237],
    [128, 256, 238],
    [257, 129, 239],
    [238, 258, 276],
    [259, 239, 277],
    [236, 276, 278],
    [277, 237, 279],
    [240, 278, 274],
    [279, 241, 275],
    [242, 274, 272],
    [275, 243, 273],
    [244, 272, 270],
    [273, 245, 271],
    [246, 270, 268],
    [271, 247, 269],
    [248, 268, 266],
    [269, 249, 267],
    [250, 266, 264],
    [267, 251, 265],
    [252, 264, 262],
    [265, 253, 263],
    [234, 262, 280],
    [263, 235, 281],
    [256, 260, 258],
    [261, 257, 259],
    [254, 282, 260],
    [283, 255, 261],
    [232, 280, 282],
    [281, 233, 283],
    [67, 284, 73],
    [285, 67, 73],
    [108, 286, 284],
    [287, 109, 285],
    [106, 288, 286],
    [289, 107, 287],
    [104, 290, 288],
    [291, 105, 289],
    [102, 292, 290],
    [293, 103, 291],
    [100, 294, 292],
    [295, 101, 293],
    [98, 296, 294],
    [297, 99, 295],
    [96, 298, 296],
    [299, 97, 297],
    [94, 300, 298],
    [301, 95, 299],
    [308, 328, 338],
    [329, 308, 339],
    [307, 338, 336],
    [339, 307, 337],
    [306, 336, 340],
    [337, 306, 341],
    [89, 306, 340],
    [306, 90, 341],
    [87, 340, 334],
    [341, 88, 335],
    [85, 334, 330],
    [335, 86, 331],
    [83, 330, 332],
    [331, 84, 333],
    [330, 338, 332],
    [339, 331, 333],
    [330, 340, 336],
    [341, 331, 337],
    [326, 338, 328],
    [339, 327, 329],
    [81, 332, 326],
    [333, 82, 327],
    [209, 344, 215],
    [345, 210, 216],
    [81, 342, 209],
    [343, 82, 210],
    [79, 344, 346],
    [345, 80, 347],
    [79, 300, 92],
    [301, 80, 93],
    [77, 352, 304],
    [353, 77, 304],
    [304, 350, 78],
    [351, 304, 78],
    [78, 348, 305],
    [349, 78, 305],
    [305, 328, 309],
    [329, 305, 309],
    [326, 348, 342],
    [349, 327, 343],
    [296, 318, 310],
    [319, 297, 311],
    [76, 324, 77],
    [325, 76, 77],
    [302, 356, 303],
    [357, 302, 303],
    [303, 354, 75],
    [355, 303, 75],
    [75, 316, 76],
    [317, 75, 76],
    [292, 362, 364],
    [363, 293, 365],
    [364, 368, 366],
    [369, 365, 367],
    [366, 370, 372],
    [371, 367, 373],
    [372, 376, 374],
    [377, 373, 375],
    [314, 374, 376],
    [375, 315, 377],
    [316, 374, 378],
    [375, 317, 379],
    [354, 372, 374],
    [373, 355, 375],
    [356, 366, 372],
    [367, 357, 373],
    [358, 364, 366],
    [365, 359, 367],
    [290, 364, 360],
    [365, 291, 361],
    [74, 358, 302],
    [359, 74, 302],
    [284, 288, 290],
    [289, 285, 291],
    [284, 360, 74],
    [361, 285, 74],
    [73, 284, 74],
    [74, 285, 73],
    [294, 310, 362],
    [311, 295, 363],
    [310, 368, 362],
    [369, 311, 363],
    [312, 370, 368],
    [371, 313, 369],
    [314, 370, 382],
    [371, 315, 383],
    [348, 386, 384],
    [387, 349, 385],
    [318, 386, 320],
    [387, 319, 321],
    [298, 384, 318],
    [385, 299, 319],
    [300, 342, 384],
    [343, 301, 385],
    [342, 348, 384],
    [385, 349, 343],
    [300, 346, 344],
    [345, 347, 301],
    [314, 380, 378],
    [381, 315, 379],
    [316, 380, 324],
    [381, 317, 325],
    [320, 380, 322],
    [381, 321, 323],
    [350, 380, 386],
    [381, 351, 387],
    [324, 380, 352],
    [353, 381, 325],
    [400, 414, 402],
    [415, 401, 403],
    [400, 404, 398],
    [405, 401, 399],
    [398, 406, 396],
    [407, 399, 397],
    [396, 408, 394],
    [409, 397, 395],
    [394, 410, 392],
    [411, 395, 393],
    [392, 412, 390],
    [413, 393, 391],
    [410, 418, 412],
    [419, 411, 413],
    [408, 420, 410],
    [421, 409, 411],
    [406, 422, 408],
    [423, 407, 409],
    [404, 424, 406],
    [425, 405, 407],
    [402, 426, 404],
    [427, 403, 405],
    [402, 416, 428],
    [417, 403, 429],
    [318, 444, 442],
    [445, 319, 443],
    [320, 412, 444],
    [413, 321, 445],
    [310, 442, 312],
    [443, 311, 313],
    [382, 414, 388],
    [415, 383, 389],
    [412, 440, 444],
    [441, 413, 445],
    [438, 444, 440],
    [445, 439, 441],
    [434, 438, 436],
    [439, 435, 437],
    [432, 446, 434],
    [447, 433, 435],
    [430, 432, 450],
    [433, 431, 451],
    [414, 450, 416],
    [451, 415, 417],
    [312, 430, 382],
    [431, 313, 383],
    [312, 446, 448],
    [447, 313, 449],
    [442, 444, 446],
    [447, 445, 443],
    [416, 452, 476],
    [453, 417, 477],
    [450, 462, 452],
    [463, 451, 453],
    [432, 460, 462],
    [461, 433, 463],
    [434, 458, 460],
    [459, 435, 461],
    [436, 456, 458],
    [457, 437, 459],
    [438, 454, 456],
    [455, 439, 457],
    [440, 474, 454],
    [475, 441, 455],
    [428, 476, 464],
    [477, 429, 465],
    [426, 464, 466],
    [465, 427, 467],
    [424, 466, 468],
    [467, 425, 469],
    [422, 468, 470],
    [469, 423, 471],
    [420, 470, 472],
    [471, 421, 473],
    [418, 472, 474],
    [473, 419, 475],
    [458, 480, 478],
    [481, 459, 479],
    [478, 482, 484],
    [483, 479, 485],
    [484, 488, 486],
    [489, 485, 487],
    [486, 490, 492],
    [491, 487, 493],
    [464, 486, 492],
    [487, 465, 493],
    [452, 486, 476],
    [487, 453, 477],
    [452, 478, 484],
    [479, 453, 485],
    [458, 462, 460],
    [463, 459, 461],
    [454, 480, 456],
    [481, 455, 457],
    [472, 480, 474],
    [481, 473, 475],
    [470, 482, 472],
    [483, 471, 473],
    [468, 488, 470],
    [489, 469, 471],
    [466, 490, 468],
    [491, 467, 469],
    [464, 492, 466],
    [467, 493, 465],
    [392, 504, 502],
    [505, 393, 503],
    [394, 502, 500],
    [503, 395, 501],
    [396, 500, 498],
    [501, 397, 499],
    [398, 498, 496],
    [499, 399, 497],
    [400, 496, 494],
    [497, 401, 495],
    [388, 494, 506],
    [495, 389, 507],
    [494, 504, 506],
    [505, 495, 507],
    [494, 500, 502],
    [501, 495, 503],
    [496, 498, 500],
    [501, 499, 497],
    [314, 388, 506],
    [389, 315, 507],
    [314, 504, 322],
    [505, 315, 323],
    [320, 504, 390],
    [505, 321, 391],
    [47, 1, 3],
    [4, 2, 48],
    [45, 3, 5],
    [6, 4, 46],
    [3, 9, 7],
    [8, 10, 4],
    [1, 11, 9],
    [10, 12, 2],
    [11, 13, 15],
    [16, 14, 12],
    [9, 15, 17],
    [18, 16, 10],
    [15, 21, 19],
    [20, 22, 16],
    [13, 23, 21],
    [22, 24, 14],
    [23, 25, 27],
    [28, 26, 24],
    [21, 27, 29],
    [30, 28, 22],
    [27, 33, 31],
    [32, 34, 28],
    [25, 35, 33],
    [34, 36, 26],
    [35, 37, 39],
    [40, 38, 36],
    [33, 39, 41],
    [42, 40, 34],
    [39, 45, 43],
    [44, 46, 40],
    [37, 47, 45],
    [46, 48, 38],
    [47, 37, 51],
    [52, 38, 48],
    [37, 35, 53],
    [54, 36, 38],
    [35, 25, 55],
    [56, 26, 36],
    [25, 23, 57],
    [58, 24, 26],
    [23, 13, 59],
    [60, 14, 24],
    [13, 11, 63],
    [64, 12, 14],
    [11, 1, 65],
    [66, 2, 12],
    [1, 47, 49],
    [50, 48, 2],
    [89, 174, 176],
    [176, 175, 90],
    [87, 172, 174],
    [175, 173, 88],
    [85, 170, 172],
    [173, 171, 86],
    [83, 168, 170],
    [171, 169, 84],
    [81, 166, 168],
    [169, 167, 82],
    [79, 92, 146],
    [147, 93, 80],
    [92, 94, 148],
    [149, 95, 93],
    [94, 96, 150],
    [151, 97, 95],
    [96, 98, 152],
    [153, 99, 97],
    [98, 100, 154],
    [155, 101, 99],
    [100, 102, 156],
    [157, 103, 101],
    [102, 104, 158],
    [159, 105, 103],
    [104, 106, 160],
    [161, 107, 105],
    [106, 108, 162],
    [163, 109, 107],
    [108, 67, 68],
    [68, 67, 109],
    [110, 128, 160],
    [161, 129, 111],
    [128, 179, 158],
    [159, 180, 129],
    [126, 156, 158],
    [159, 157, 127],
    [124, 154, 156],
    [157, 155, 125],
    [122, 152, 154],
    [155, 153, 123],
    [120, 150, 152],
    [153, 151, 121],
    [118, 148, 150],
    [151, 149, 119],
    [116, 146, 148],
    [149, 147, 117],
    [114, 164, 146],
    [147, 165, 115],
    [114, 181, 177],
    [177, 182, 115],
    [110, 162, 68],
    [68, 163, 111],
    [112, 68, 178],
    [178, 68, 113],
    [177, 181, 183],
    [184, 182, 177],
    [135, 137, 176],
    [176, 137, 136],
    [133, 135, 174],
    [175, 136, 134],
    [131, 133, 172],
    [173, 134, 132],
    [166, 187, 185],
    [186, 188, 167],
    [131, 170, 168],
    [169, 171, 132],
    [144, 190, 189],
    [189, 190, 145],
    [185, 187, 189],
    [189, 188, 186],
    [130, 131, 185],
    [186, 132, 130],
    [142, 193, 191],
    [192, 194, 143],
    [140, 195, 193],
    [194, 196, 141],
    [139, 197, 195],
    [196, 198, 139],
    [138, 71, 197],
    [198, 71, 138],
    [190, 144, 191],
    [192, 145, 190],
    [70, 191, 206],
    [207, 192, 70],
    [71, 199, 200],
    [201, 199, 71],
    [197, 200, 202],
    [203, 201, 198],
    [195, 202, 204],
    [205, 203, 196],
    [193, 204, 206],
    [207, 205, 194],
    [199, 204, 202],
    [203, 205, 199],
    [199, 208, 206],
    [207, 208, 199],
    [139, 140, 164],
    [165, 141, 139],
    [140, 142, 211],
    [212, 143, 141],
    [142, 144, 213],
    [214, 145, 143],
    [144, 187, 166],
    [167, 188, 145],
    [81, 209, 213],
    [214, 210, 82],
    [209, 215, 211],
    [212, 216, 210],
    [79, 164, 211],
    [212, 165, 80],
    [131, 130, 72],
    [72, 130, 132],
    [133, 131, 222],
    [223, 132, 134],
    [135, 133, 220],
    [221, 134, 136],
    [137, 135, 218],
    [219, 136, 137],
    [217, 218, 229],
    [230, 219, 217],
    [218, 220, 227],
    [228, 221, 219],
    [220, 222, 225],
    [226, 223, 221],
    [222, 72, 224],
    [224, 72, 223],
    [224, 231, 229],
    [230, 231, 224],
    [183, 181, 234],
    [235, 182, 184],
    [112, 183, 232],
    [233, 184, 113],
    [110, 112, 254],
    [255, 113, 111],
    [181, 114, 252],
    [253, 115, 182],
    [114, 116, 250],
    [251, 117, 115],
    [116, 118, 248],
    [249, 119, 117],
    [118, 120, 246],
    [247, 121, 119],
    [120, 122, 244],
    [245, 123, 121],
    [122, 124, 242],
    [243, 125, 123],
    [124, 126, 240],
    [241, 127, 125],
    [126, 179, 236],
    [237, 180, 127],
    [179, 128, 238],
    [239, 129, 180],
    [128, 110, 256],
    [257, 111, 129],
    [238, 256, 258],
    [259, 257, 239],
    [236, 238, 276],
    [277, 239, 237],
    [240, 236, 278],
    [279, 237, 241],
    [242, 240, 274],
    [275, 241, 243],
    [244, 242, 272],
    [273, 243, 245],
    [246, 244, 270],
    [271, 245, 247],
    [248, 246, 268],
    [269, 247, 249],
    [250, 248, 266],
    [267, 249, 251],
    [252, 250, 264],
    [265, 251, 253],
    [234, 252, 262],
    [263, 253, 235],
    [256, 254, 260],
    [261, 255, 257],
    [254, 232, 282],
    [283, 233, 255],
    [232, 234, 280],
    [281, 235, 233],
    [67, 108, 284],
    [285, 109, 67],
    [108, 106, 286],
    [287, 107, 109],
    [106, 104, 288],
    [289, 105, 107],
    [104, 102, 290],
    [291, 103, 105],
    [102, 100, 292],
    [293, 101, 103],
    [100, 98, 294],
    [295, 99, 101],
    [98, 96, 296],
    [297, 97, 99],
    [96, 94, 298],
    [299, 95, 97],
    [94, 92, 300],
    [301, 93, 95],
    [308, 309, 328],
    [329, 309, 308],
    [307, 308, 338],
    [339, 308, 307],
    [306, 307, 336],
    [337, 307, 306],
    [89, 91, 306],
    [306, 91, 90],
    [87, 89, 340],
    [341, 90, 88],
    [85, 87, 334],
    [335, 88, 86],
    [83, 85, 330],
    [331, 86, 84],
    [330, 336, 338],
    [339, 337, 331],
    [330, 334, 340],
    [341, 335, 331],
    [326, 332, 338],
    [339, 333, 327],
    [81, 83, 332],
    [333, 84, 82],
    [209, 342, 344],
    [345, 343, 210],
    [81, 326, 342],
    [343, 327, 82],
    [79, 215, 344],
    [345, 216, 80],
    [79, 346, 300],
    [301, 347, 80],
    [77, 324, 352],
    [353, 325, 77],
    [304, 352, 350],
    [351, 353, 304],
    [78, 350, 348],
    [349, 351, 78],
    [305, 348, 328],
    [329, 349, 305],
    [326, 328, 348],
    [349, 329, 327],
    [296, 298, 318],
    [319, 299, 297],
    [76, 316, 324],
    [325, 317, 76],
    [302, 358, 356],
    [357, 359, 302],
    [303, 356, 354],
    [355, 357, 303],
    [75, 354, 316],
    [317, 355, 75],
    [292, 294, 362],
    [363, 295, 293],
    [364, 362, 368],
    [369, 363, 365],
    [366, 368, 370],
    [371, 369, 367],
    [372, 370, 376],
    [377, 371, 373],
    [314, 378, 374],
    [375, 379, 315],
    [316, 354, 374],
    [375, 355, 317],
    [354, 356, 372],
    [373, 357, 355],
    [356, 358, 366],
    [367, 359, 357],
    [358, 360, 364],
    [365, 361, 359],
    [290, 292, 364],
    [365, 293, 291],
    [74, 360, 358],
    [359, 361, 74],
    [284, 286, 288],
    [289, 287, 285],
    [284, 290, 360],
    [361, 291, 285],
    [294, 296, 310],
    [311, 297, 295],
    [310, 312, 368],
    [369, 313, 311],
    [312, 382, 370],
    [371, 383, 313],
    [314, 376, 370],
    [371, 377, 315],
    [348, 350, 386],
    [387, 351, 349],
    [318, 384, 386],
    [387, 385, 319],
    [298, 300, 384],
    [385, 301, 299],
    [300, 344, 342],
    [343, 345, 301],
    [314, 322, 380],
    [381, 323, 315],
    [316, 378, 380],
    [381, 379, 317],
    [320, 386, 380],
    [381, 387, 321],
    [350, 352, 380],
    [381, 353, 351],
    [400, 388, 414],
    [415, 389, 401],
    [400, 402, 404],
    [405, 403, 401],
    [398, 404, 406],
    [407, 405, 399],
    [396, 406, 408],
    [409, 407, 397],
    [394, 408, 410],
    [411, 409, 395],
    [392, 410, 412],
    [413, 411, 393],
    [410, 420, 418],
    [419, 421, 411],
    [408, 422, 420],
    [421, 423, 409],
    [406, 424, 422],
    [423, 425, 407],
    [404, 426, 424],
    [425, 427, 405],
    [402, 428, 426],
    [427, 429, 403],
    [402, 414, 416],
    [417, 415, 403],
    [318, 320, 444],
    [445, 321, 319],
    [320, 390, 412],
    [413, 391, 321],
    [310, 318, 442],
    [443, 319, 311],
    [382, 430, 414],
    [415, 431, 383],
    [412, 418, 440],
    [441, 419, 413],
    [438, 446, 444],
    [445, 447, 439],
    [434, 446, 438],
    [439, 447, 435],
    [432, 448, 446],
    [447, 449, 433],
    [430, 448, 432],
    [433, 449, 431],
    [414, 430, 450],
    [451, 431, 415],
    [312, 448, 430],
    [431, 449, 313],
    [312, 442, 446],
    [447, 443, 313],
    [416, 450, 452],
    [453, 451, 417],
    [450, 432, 462],
    [463, 433, 451],
    [432, 434, 460],
    [461, 435, 433],
    [434, 436, 458],
    [459, 437, 435],
    [436, 438, 456],
    [457, 439, 437],
    [438, 440, 454],
    [455, 441, 439],
    [440, 418, 474],
    [475, 419, 441],
    [428, 416, 476],
    [477, 417, 429],
    [426, 428, 464],
    [465, 429, 427],
    [424, 426, 466],
    [467, 427, 425],
    [422, 424, 468],
    [469, 425, 423],
    [420, 422, 470],
    [471, 423, 421],
    [418, 420, 472],
    [473, 421, 419],
    [458, 456, 480],
    [481, 457, 459],
    [478, 480, 482],
    [483, 481, 479],
    [484, 482, 488],
    [489, 483, 485],
    [486, 488, 490],
    [491, 489, 487],
    [464, 476, 486],
    [487, 477, 465],
    [452, 484, 486],
    [487, 485, 453],
    [452, 462, 478],
    [479, 463, 453],
    [458, 478, 462],
    [463, 479, 459],
    [454, 474, 480],
    [481, 475, 455],
    [472, 482, 480],
    [481, 483, 473],
    [470, 488, 482],
    [483, 489, 471],
    [468, 490, 488],
    [489, 491, 469],
    [466, 492, 490],
    [491, 493, 467],
    [392, 390, 504],
    [505, 391, 393],
    [394, 392, 502],
    [503, 393, 395],
    [396, 394, 500],
    [501, 395, 397],
    [398, 396, 498],
    [499, 397, 399],
    [400, 398, 496],
    [497, 399, 401],
    [388, 400, 494],
    [495, 401, 389],
    [494, 502, 504],
    [505, 503, 495],
    [494, 496, 500],
    [501, 497, 495],
    [314, 382, 388],
    [389, 383, 315],
    [314, 506, 504],
    [505, 507, 315],
    [320, 322, 504],
    [505, 323, 321],
  ];
  const res = [];
  f.forEach((face) => {
    res.push(v[face[0] - 1], v[face[1] - 1], v[face[2] - 1]);
  });
  return res;
}