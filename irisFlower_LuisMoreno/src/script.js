// Se inicializa la red neuronal
var network = new brain.NeuralNetwork();

// Datos de entrenamiento
network.train([
    // Datos de Iris-setosa
    {input: { SepalLengthCm: 5.1,SepalWidthCm: 3.5,PetalLengthCm: 1.4,PetalWidthCm: 0.2 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 4.9,SepalWidthCm: 3,PetalLengthCm: 1.4,PetalWidthCm: 0.2 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 4.7,SepalWidthCm: 3.2,PetalLengthCm: 1.3,PetalWidthCm: 0.2 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 4.6,SepalWidthCm: 3.1,PetalLengthCm: 1.5,PetalWidthCm: 0.2 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 5,SepalWidthCm: 3.6,PetalLengthCm: 1.4,PetalWidthCm: 0.2 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 5.4,SepalWidthCm: 3.9,PetalLengthCm: 1.7,PetalWidthCm: 0.4 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 4.6,SepalWidthCm: 3.4,PetalLengthCm: 1.4,PetalWidthCm: 0.3 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 5,SepalWidthCm: 3.4,PetalLengthCm: 1.5,PetalWidthCm: 0.2 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 4.4,SepalWidthCm: 2.9,PetalLengthCm: 1.4,PetalWidthCm: 0.2 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 4.9,SepalWidthCm: 3.1,PetalLengthCm: 1.5,PetalWidthCm: 0.1 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 5.4,SepalWidthCm: 3.7,PetalLengthCm: 1.5,PetalWidthCm: 0.2 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 4.8,SepalWidthCm: 3.4,PetalLengthCm: 1.6,PetalWidthCm: 0.2 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 4.8,SepalWidthCm: 3,PetalLengthCm: 1.4,PetalWidthCm: 0.1 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 4.3,SepalWidthCm: 3,PetalLengthCm: 1.1,PetalWidthCm: 0.1 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 5.8,SepalWidthCm: 4,PetalLengthCm: 1.2,PetalWidthCm: 0.2 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 5.7,SepalWidthCm: 4.4,PetalLengthCm: 1.5,PetalWidthCm: 0.4 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 5.4,SepalWidthCm: 3.9,PetalLengthCm: 1.3,PetalWidthCm: 0.4 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 5.1,SepalWidthCm: 3.5,PetalLengthCm: 1.4,PetalWidthCm: 0.3 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 5.7,SepalWidthCm: 3.8,PetalLengthCm: 1.7,PetalWidthCm: 0.3 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 5.1,SepalWidthCm: 3.8,PetalLengthCm: 1.5,PetalWidthCm: 0.3 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 5.4,SepalWidthCm: 3.4,PetalLengthCm: 1.7,PetalWidthCm: 0.2 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 5.1,SepalWidthCm: 3.7,PetalLengthCm: 1.5,PetalWidthCm: 0.4 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 4.6,SepalWidthCm: 3.6,PetalLengthCm: 1,PetalWidthCm: 0.2 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },
    {input: { SepalLengthCm: 5.1,SepalWidthCm: 3.3,PetalLengthCm: 1.7,PetalWidthCm: 0.5 }, output: { setosa: 1, versicolor: 0, virginica: 0 } },

    // Datos de Iris-versicolor
    {input: { SepalLengthCm: 7,SepalWidthCm: 3.2,PetalLengthCm: 4.7,PetalWidthCm: 1.4 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 6.4,SepalWidthCm: 3.2,PetalLengthCm: 4.5,PetalWidthCm: 1.5 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 6.9,SepalWidthCm: 3.1,PetalLengthCm: 4.9,PetalWidthCm: 1.5 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 5.5,SepalWidthCm: 2.3,PetalLengthCm: 4,PetalWidthCm: 1.3 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 6.5,SepalWidthCm: 2.8,PetalLengthCm: 4.6,PetalWidthCm: 1.5 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 5.7,SepalWidthCm: 2.8,PetalLengthCm: 4.5,PetalWidthCm: 1.3 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 6.3,SepalWidthCm: 3.3,PetalLengthCm: 4.7,PetalWidthCm: 1.6 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 4.9,SepalWidthCm: 2.4,PetalLengthCm: 3.3,PetalWidthCm: 1 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 6.6,SepalWidthCm: 2.9,PetalLengthCm: 4.6,PetalWidthCm: 1.3 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 5.2,SepalWidthCm: 2.7,PetalLengthCm: 3.9,PetalWidthCm: 1.4 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 5,SepalWidthCm: 2,PetalLengthCm: 3.5,PetalWidthCm: 1 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 5.9,SepalWidthCm: 3,PetalLengthCm: 4.2,PetalWidthCm: 1.5 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 6,SepalWidthCm: 2.2,PetalLengthCm: 4,PetalWidthCm: 1 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 6.1,SepalWidthCm: 2.9,PetalLengthCm: 4.7,PetalWidthCm: 1.4 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 5.6,SepalWidthCm: 2.9,PetalLengthCm: 3.6,PetalWidthCm: 1.3 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 6.7,SepalWidthCm: 3.1,PetalLengthCm: 4.4,PetalWidthCm: 1.4 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 5.6,SepalWidthCm: 3,PetalLengthCm: 4.5,PetalWidthCm: 1.5 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 5.8,SepalWidthCm: 2.7,PetalLengthCm: 4.1,PetalWidthCm: 1 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 6.2,SepalWidthCm: 2.2,PetalLengthCm: 4.5,PetalWidthCm: 1.5 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 5.6,SepalWidthCm: 2.5,PetalLengthCm: 3.9,PetalWidthCm: 1.1 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 5.9,SepalWidthCm: 3.2,PetalLengthCm: 4.8,PetalWidthCm: 1.8 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 6.1,SepalWidthCm: 2.8,PetalLengthCm: 4,PetalWidthCm: 1.3 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 6.3,SepalWidthCm: 2.5,PetalLengthCm: 4.9,PetalWidthCm: 1.5 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },
    {input: { SepalLengthCm: 6.1,SepalWidthCm: 2.8,PetalLengthCm: 4.7,PetalWidthCm: 1.2 }, output: { setosa: 0, versicolor: 1, virginica: 0 } },

    // Datos de Iris-virginica
    {input: { SepalLengthCm: 6.3,SepalWidthCm: 3.3,PetalLengthCm: 6,PetalWidthCm: 2.5 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 5.8,SepalWidthCm: 2.7,PetalLengthCm: 5.1,PetalWidthCm: 1.9 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 7.1,SepalWidthCm: 3,PetalLengthCm: 5.9,PetalWidthCm: 2.1 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 6.3,SepalWidthCm: 2.9,PetalLengthCm: 5.6,PetalWidthCm: 1.8 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 6.5,SepalWidthCm: 3,PetalLengthCm: 5.8,PetalWidthCm: 2.2 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 7.6,SepalWidthCm: 3,PetalLengthCm: 6.6,PetalWidthCm: 2.1 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 4.9,SepalWidthCm: 2.5,PetalLengthCm: 4.5,PetalWidthCm: 1.7 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 7.3,SepalWidthCm: 2.9,PetalLengthCm: 6.3,PetalWidthCm: 1.8 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 6.7,SepalWidthCm: 2.5,PetalLengthCm: 5.8,PetalWidthCm: 1.8 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 7.2,SepalWidthCm: 3.6,PetalLengthCm: 6.1,PetalWidthCm: 2.5 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 6.5,SepalWidthCm: 3.2,PetalLengthCm: 5.1,PetalWidthCm: 2 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 6.4,SepalWidthCm: 2.7,PetalLengthCm: 5.3,PetalWidthCm: 1.9 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 6.8,SepalWidthCm: 3,PetalLengthCm: 5.5,PetalWidthCm: 2.1 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 5.7,SepalWidthCm: 2.5,PetalLengthCm: 5,PetalWidthCm: 2 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 5.8,SepalWidthCm: 2.8,PetalLengthCm: 5.1,PetalWidthCm: 2.4 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 6.4,SepalWidthCm: 3.2,PetalLengthCm: 5.3,PetalWidthCm: 2.3 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 6.5,SepalWidthCm: 3,PetalLengthCm: 5.5,PetalWidthCm: 1.8 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 7.7,SepalWidthCm: 3.8,PetalLengthCm: 6.7,PetalWidthCm: 2.2 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 7.7,SepalWidthCm: 2.6,PetalLengthCm: 6.9,PetalWidthCm: 2.3 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 6,SepalWidthCm: 2.2,PetalLengthCm: 5,PetalWidthCm: 1.5 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 6.9,SepalWidthCm: 3.2,PetalLengthCm: 5.7,PetalWidthCm: 2.3 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 5.6,SepalWidthCm: 2.8,PetalLengthCm: 4.9,PetalWidthCm: 2 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 7.7,SepalWidthCm: 2.8,PetalLengthCm: 6.7,PetalWidthCm: 2 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },
    {input: { SepalLengthCm: 6.3,SepalWidthCm: 2.7,PetalLengthCm: 4.9,PetalWidthCm: 1.8 }, output: { setosa: 0, versicolor: 0, virginica: 1 } },

])

function update(lenSepalo, widthSepalo, lenPetalo, widthPetalo) {
    console.log(lenSepalo + ", " + widthSepalo+ ", " + lenPetalo + ", " + widthPetalo)
    var entrada = {
        SepalLengthCm: lenSepalo,
        SepalWidthCm: widthSepalo,
        PetalLengthCm: lenPetalo,
        PetalWidthCm: widthPetalo
    }
    // Obtenemos los porcentajes
    var result = network.run(entrada);
    document.getElementById("resultado").innerHTML = "<p> Setosa: " + Math.round(result.setosa*100) + "%, Versicolor: " + Math.round(result.versicolor *100) + "%, Virginica: " + Math.round(result.virginica*100) + "% </p>"  
    console.log(result);

}