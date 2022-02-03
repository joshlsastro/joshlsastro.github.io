# How Realistic is My Computation?

The fundamental limit on computation is given by the Shannon-von Neumann-Landauer limit (often just called the Landauer limit). It tells us how much energy a computation requires. This calculator works that out for you; so if you want to find how much energy would be required to perform any computation, you can do that here.

Temperature: <input id="temperature" type="number" step="any" value="293"> Kelvin. This is set to room temperature by default. The energy required gets lower with temperature, but getting lower than the temperature of the Cosmic Microwave Background, the heat left over from the Big Bang, would likely require more energy than you'd save in the computation. The temperature of the Cosmic Microwave Background is around 2.73 Kelvin.

Bit operations per instruction: <input id="opsPerInstruction" type="number" step="1" value="1000"> This is the number of bits irreversibly set during a given instruction. I've set this to a very optimistic value of 1000.

Instructions executed: <input id="instructionsExecuted" type="number" step="1">

<script src="landauer.js"></script>

<input type="button" value="Calculate" onclick="main()">

<p id="output"></p>

## Notes

The limit used here assumes that reversible computing is impossible. If you could accomplish that, computation wouldn't require any energy. That being said, it doesn't seem possible; how do you undo a computation?

## Works Cited

Marc Baldo, "Fundamental limits in computation", <https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-701-introduction-to-nanoelectronics-spring-2010/readings/MIT6_701S10_part7.pdf>

NASA/WMAP Science Team, "WMAP CMB Fluctuations", <https://wmap.gsfc.nasa.gov/universe/bb_cosmo_fluct.html>

Eite Riesinga et al., "CODATA Value: Boltzmann constant", <https://physics.nist.gov/cgi-bin/cuu/Value?k>
