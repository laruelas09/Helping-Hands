// Helping Hands Scala File

// Imports
import scala.collection.mutable.Map
import scala.io.Source

// Helper methods
def processFile(filename: String) : Map[String, Int] = {
	val lines = Source.fromFile(filename).getLines.toList
	val wordcount = lines.flatMap(line => line.split(" ")).foldLeft(Map.empty[String, Int]) {
		(map, word) => map + (word -> (map.getOrElse(word, 0) + 1))
	}
	wordcount
}

def printWordCount(wordcount: Map[String, Int]) = {
	println("Word Count Results\n")
	wordcount.foreach {
		case (w, c) => println(s"$w: $c")
	}
	println("\nDone !")
}

// Main
val filename = "data.txt"
val wordcount = processFile(filename)
printWordCount(wordcount)