"""
Generate matrices for curve bases.
"""

import numpy as np


def interp_inverse():
    def eval(t):
        return np.array([t ** 3, t ** 2, t, 1], dtype=np.float64)
    forward_matrix = np.array([eval(0), eval(1/3), eval(2/3), eval(1)])
    return np.linalg.inv(forward_matrix)


def bezier_basis():
    # Maps control points to points on curve.
    matrix = np.array([
        [1, 0, 0, 0],
        [8/27, 12/27, 6/27, 1/27],
        [1/27, 6/27, 12/27, 8/27],
        [0, 0, 0, 1],
    ])
    return np.linalg.inv(matrix)


def bezier_inverse():
    # Maps control points to points on curve.
    matrix = np.linalg.inv(bezier_basis())
    return interp_inverse() @ matrix


print('Interp inverse:', interp_inverse())
print('Bezier basis:', bezier_basis())
print('Bezier inverse:', bezier_inverse())
