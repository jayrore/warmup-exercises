package insertionSort
import (
	"testing"
	"reflect"
)

func TestCase1(t *testing.T) {
	test1 := []int{4,3,2,1}
	output := InsertionSort(test1)
	expected := []int{1,2,3,4}

	if !reflect.DeepEqual(output, expected) {
		t.Errorf("Sort Array is incorrect")
	}
}