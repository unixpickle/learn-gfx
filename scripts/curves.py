"""
Generate matrices for curve bases.
"""

import numpy as np


def interp_basis():
    def eval(t):
        return np.array([t ** 3, t ** 2, t, 1], dtype=np.float64)
    forward_matrix = np.array([eval(0), eval(1/3), eval(2/3), eval(1)])
    print('Interp basis:', np.linalg.inv(forward_matrix))


interp_basis()
