package binarySearch
import "testing"

func TestCase1(t *testing.T) {
	test1 := []int{0,1,2,3,4,5,6,7,8}
	result := BinarySearch(test1, 2)
	if result != 2 {
		t.Errorf("Assert is incorrect, got: %d, want: %d.", result, 2)
	}
}

func TestCase2(t *testing.T) {
	test1 := []int{0,1,2,3,4,5,6,7,8}
	result := BinarySearch(test1, 6)
	if result != 6 {
		t.Errorf("Assert is incorrect, got: %d, want: %d.", result, 6)
	}
}